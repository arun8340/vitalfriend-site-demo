const fs = require('fs');
const xml2js = require('xml2js');
const path = require('path');

// Recursively extract all text content from Elementor JSON widget tree
function extractElementorContent(elements, depth = 0) {
  const lines = [];
  if (!Array.isArray(elements)) return lines;

  for (const el of elements) {
    const type = el.elType;
    const widgetType = el.widgetType || '';
    const settings = el.settings || {};

    if (type === 'widget') {
      switch (widgetType) {
        case 'heading':
          if (settings.title) {
            const level = settings.header_size || 'h2';
            const hashes = level === 'h1' ? '#' : level === 'h2' ? '##' : level === 'h3' ? '###' : level === 'h4' ? '####' : '#####';
            const text = stripHtml(settings.title);
            if (text) lines.push(`${hashes} ${text}`);
          }
          break;

        case 'text-editor':
        case 'editor':
          if (settings.editor) {
            const text = htmlToMarkdown(settings.editor);
            if (text) lines.push(text);
          }
          break;

        case 'button':
          if (settings.text) {
            const url = settings.link?.url || '';
            lines.push(url ? `[${settings.text}](${url})` : `**${settings.text}**`);
          }
          break;

        case 'image':
          if (settings.image?.url) {
            const alt = settings.image.alt || '';
            lines.push(`![${alt}](${settings.image.url})`);
          }
          break;

        case 'icon-box':
          if (settings.title_text) lines.push(`### ${stripHtml(settings.title_text)}`);
          if (settings.description_text) lines.push(stripHtml(settings.description_text));
          break;

        case 'image-box':
          if (settings.title_text) lines.push(`### ${stripHtml(settings.title_text)}`);
          if (settings.description_text) lines.push(stripHtml(settings.description_text));
          if (settings.image?.url) lines.push(`![${settings.title_text || ''}](${settings.image.url})`);
          break;

        case 'counter':
          if (settings.starting_number !== undefined || settings.ending_number !== undefined) {
            const label = settings.title || '';
            const num = settings.ending_number || settings.number || '';
            if (num || label) lines.push(`**${num}** ${label}`.trim());
          }
          break;

        case 'testimonial':
        case 'testimonial-carousel':
          if (settings.content) lines.push(`> ${stripHtml(settings.content)}`);
          if (settings.name) lines.push(`> — ${settings.name}`);
          break;

        case 'accordion':
        case 'toggle':
          if (Array.isArray(settings.tabs)) {
            for (const tab of settings.tabs) {
              if (tab.tab_title) lines.push(`### ${stripHtml(tab.tab_title)}`);
              if (tab.tab_content) lines.push(stripHtml(tab.tab_content));
            }
          }
          break;

        case 'tabs':
          if (Array.isArray(settings.tabs)) {
            for (const tab of settings.tabs) {
              if (tab.tab_title) lines.push(`### ${stripHtml(tab.tab_title)}`);
              if (tab.tab_content) lines.push(stripHtml(tab.tab_content));
            }
          }
          break;

        case 'video':
          if (settings.youtube_url) lines.push(`[Video](${settings.youtube_url})`);
          if (settings.vimeo_url) lines.push(`[Video](${settings.vimeo_url})`);
          break;

        case 'divider':
          lines.push('---');
          break;

        case 'spacer':
          // Skip spacers
          break;

        default:
          // Generic fallback - try common text fields
          const textFields = ['title', 'description', 'text', 'content', 'caption', 'html'];
          for (const field of textFields) {
            if (settings[field] && typeof settings[field] === 'string') {
              const text = stripHtml(settings[field]);
              if (text && text.length > 2) lines.push(text);
            }
          }
          // Handle custom HTML widget
          if (settings.html) {
            const text = htmlToMarkdown(settings.html);
            if (text) lines.push(text);
          }
          break;
      }
    }

    // Recurse into child elements (containers, sections, columns)
    if (el.elements && el.elements.length > 0) {
      const childLines = extractElementorContent(el.elements, depth + 1);
      lines.push(...childLines);
    }
  }

  return lines;
}

// Remove style/script blocks before HTML processing
function removeStyleBlocks(html) {
  if (!html) return '';
  return html
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '');
}

// Strip HTML tags, decode entities
function stripHtml(html) {
  if (!html) return '';
  return removeStyleBlocks(html)
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/p>/gi, '\n')
    .replace(/<\/li>/gi, '\n')
    .replace(/<li>/gi, '- ')
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/&#8217;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&#8211;/g, '-')
    .replace(/&#8212;/g, '—')
    .trim();
}

// Convert basic HTML to Markdown
function htmlToMarkdown(html) {
  if (!html) return '';
  return removeStyleBlocks(html)
    .replace(/<h1[^>]*>(.*?)<\/h1>/gi, (_, t) => `# ${stripHtml(t)}\n`)
    .replace(/<h2[^>]*>(.*?)<\/h2>/gi, (_, t) => `## ${stripHtml(t)}\n`)
    .replace(/<h3[^>]*>(.*?)<\/h3>/gi, (_, t) => `### ${stripHtml(t)}\n`)
    .replace(/<h4[^>]*>(.*?)<\/h4>/gi, (_, t) => `#### ${stripHtml(t)}\n`)
    .replace(/<strong[^>]*>(.*?)<\/strong>/gi, (_, t) => `**${stripHtml(t)}**`)
    .replace(/<b[^>]*>(.*?)<\/b>/gi, (_, t) => `**${stripHtml(t)}**`)
    .replace(/<em[^>]*>(.*?)<\/em>/gi, (_, t) => `*${stripHtml(t)}*`)
    .replace(/<i[^>]*>(.*?)<\/i>/gi, (_, t) => `*${stripHtml(t)}*`)
    .replace(/<a[^>]+href="([^"]*)"[^>]*>(.*?)<\/a>/gi, (_, href, text) => `[${stripHtml(text)}](${href})`)
    .replace(/<li[^>]*>(.*?)<\/li>/gi, (_, t) => `- ${stripHtml(t)}\n`)
    .replace(/<p[^>]*>(.*?)<\/p>/gi, (_, t) => `${stripHtml(t)}\n`)
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/&#8217;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

// Also extract content from standard WordPress blocks
function extractBlockContent(htmlContent) {
  if (!htmlContent || !htmlContent.trim()) return '';
  // Remove WordPress block comments
  const cleaned = htmlContent.replace(/<!--\s*wp:[^>]*?-->/g, '').replace(/<!--\s*\/wp:[^>]*?-->/g, '');
  return htmlToMarkdown(cleaned);
}

async function parseWordPressXML() {
  const xmlFile = fs.readFileSync('./data/wordpress-export.xml', 'utf8');
  const parser = new xml2js.Parser({ explicitArray: true, explicitCharkey: false });

  parser.parseString(xmlFile, (err, result) => {
    if (err) {
      console.error('Error parsing XML:', err);
      return;
    }

    const items = result.rss.channel[0].item || [];
    let processed = 0;
    let skipped = 0;

    items.forEach(item => {
      const postType = item['wp:post_type']?.[0];
      const status = item['wp:status']?.[0];

      // Process published posts and pages (and elementor-hf templates for reference)
      if (status !== 'publish') return;
      if (!['post', 'page', 'elementor-hf', 'elementor_library'].includes(postType)) return;

      const title = item.title?.[0] || '';
      const rawContent = item['content:encoded']?.[0] || '';
      const slug = item['wp:post_name']?.[0] || '';
      const date = item['wp:post_date']?.[0] || '';
      const excerpt = item['excerpt:encoded']?.[0] || '';

      // Skip nav_menu_items and empty slugs
      if (!slug || slug.startsWith('group-') || slug.startsWith('placeholder')) {
        skipped++;
        return;
      }

      // Extract Yoast SEO meta
      let seoTitle = '';
      let seoDescription = '';
      let focusKeyword = '';

      // Extract postmeta
      const postmeta = item['wp:postmeta'] || [];
      let elementorData = null;

      for (const meta of postmeta) {
        const key = meta['wp:meta_key']?.[0] || '';
        const value = meta['wp:meta_value']?.[0] || '';

        if (key === '_elementor_data') {
          try {
            elementorData = JSON.parse(value);
          } catch (e) {
            console.warn(`  Warning: Could not parse Elementor JSON for "${title}": ${e.message}`);
          }
        } else if (key === '_yoast_wpseo_title') {
          seoTitle = value.replace(/%%sep%%.*%%sitename%%/, '').replace(/%%sitename%%/, 'VitalFriend').trim();
        } else if (key === '_yoast_wpseo_metadesc') {
          seoDescription = value;
        } else if (key === '_yoast_wpseo_focuskw') {
          focusKeyword = value;
        }
      }

      // Build content: prefer Elementor data, fallback to block content
      let bodyContent = '';

      if (elementorData) {
        const lines = extractElementorContent(elementorData);
        bodyContent = lines.filter(l => l.trim()).join('\n\n');
        console.log(`  [Elementor] Extracted ${lines.length} content blocks from "${title}"`);
      } else if (rawContent.trim()) {
        bodyContent = extractBlockContent(rawContent);
        console.log(`  [Blocks] Extracted block content from "${title}"`);
      } else {
        console.log(`  [Empty] No content found for "${title}"`);
        skipped++;
        return;
      }

      if (!bodyContent.trim()) {
        console.log(`  [Skip] Empty body after extraction for "${title}"`);
        skipped++;
        return;
      }

      // Build frontmatter
      const frontmatter = [
        '---',
        `title: "${title.replace(/"/g, '\\"')}"`,
        `date: "${date}"`,
        `slug: "${slug}"`,
        seoTitle ? `seoTitle: "${seoTitle.replace(/"/g, '\\"')}"` : null,
        seoDescription ? `seoDescription: "${seoDescription.replace(/"/g, '\\"')}"` : null,
        focusKeyword ? `focusKeyword: "${focusKeyword}"` : null,
        excerpt ? `excerpt: "${excerpt.replace(/"/g, '\\"')}"` : null,
        '---',
      ].filter(Boolean).join('\n');

      const markdown = `${frontmatter}\n\n${bodyContent}\n`;

      // Save to appropriate folder
      let folder;
      if (postType === 'post') {
        folder = 'posts';
      } else if (postType === 'elementor-hf' || postType === 'elementor_library') {
        folder = 'pages-content/templates';
      } else {
        folder = 'pages-content';
      }

      // Ensure folder exists
      if (!fs.existsSync(folder)) {
        fs.mkdirSync(folder, { recursive: true });
      }

      const filename = `${folder}/${slug}.md`;
      fs.writeFileSync(filename, markdown);
      console.log(`  Created: ${filename}`);
      processed++;
    });

    console.log(`\nDone! Processed: ${processed}, Skipped: ${skipped}`);
  });
}

parseWordPressXML();
