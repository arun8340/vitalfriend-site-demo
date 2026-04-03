"use client";

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";

const helpTopics = [
  { id: "wearing", icon: "⌚", label: "Wearing BUDDI" },
  { id: "cleaning", icon: "🧼", label: "Cleaning" },
  { id: "readings", icon: "📊", label: "Readings" },
  { id: "sync", icon: "🔄", label: "Sync" },
  { id: "troubleshooting", icon: "🔧", label: "Troubleshooting" },
  { id: "contact", icon: "📞", label: "Contact" },
];

const careInstructions = [
  "If you prefer not to wear it continuously all day, a minimum of twice a day is ok. Incorporate it into your daily routine.",
  "Sleep with BUDDI or if instructed to by your care team.",
  "The more consistently BUDDI is worn, the better it works.",
];

const properCareItems = [
  "Charge BUDDI every 2 days, or as instructed.",
  "Clean the cuff at least once per week.",
  "Keep BUDDI dry.",
  "Excess moisture or sweat can cause white spots on the cuff.",
  "If irritation occurs, remove and notify care team.",
];

const features = [
  {
    icon: "🩸",
    title: "Blood Pressure",
    description:
      "Tracks changes in blood pressure over time. This data can help identify patterns and potential concerns before they become serious.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&q=80",
    alt: "Blood pressure monitoring",
  },
  {
    icon: "❤️",
    title: "Heart Rate",
    description:
      "Monitors heart rate throughout the day and night. Sudden changes or longer periods of higher stress can indicate health issues that may need attention.",
    image: "https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=400&q=80",
    alt: "Heart rate monitoring",
  },
  {
    icon: "🏃",
    title: "Activity",
    description:
      "Tracks daily movement and step count for understood activity levels. Changes in movement can indicate fatigue, stress, or mobility concerns.",
    image: "https://images.unsplash.com/photo-1510771463146-e89e6e86560e?w=400&q=80",
    alt: "Activity tracking",
  },
  {
    icon: "🫁",
    title: "Oxygen Levels",
    description:
      "Measures oxygen saturation to help detect breathing or circulation changes. This can be especially important during sleep or periods of rest.",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400&q=80",
    alt: "Oxygen level monitoring",
  },
];

const faqs = [
  {
    question: "What if BUDDI isn't worn?",
    answer:
      "You can contact us to report the status of your video or service program within a few hours. Your order will start.",
  },
  {
    question: "Who sees the data?",
    answer:
      "Only your authorized care team — including your physician and facility staff — can access your vitals data. Family members may be granted limited access with your consent.",
  },
  {
    question: "Is my information secure?",
    answer:
      "Yes. VitalFriend is HIPAA-compliant and uses industry-standard encryption to protect all your personal and health information.",
  },
  {
    question: "Can I track my order or service progress?",
    answer:
      "Yes. You can contact our support team at care@vitalfrnd.com or call 1 (855) 742 7300 for order and service status updates.",
  },
];

const tutorials = [
  {
    title: "Essentials Handbook",
    description: "Everything you need to get started with your BUDDI device — setup, pairing, and daily use.",
    image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=600&q=80",
    alt: "Essentials handbook tutorial",
  },
  {
    title: "Learning Journal",
    description: "A guided walkthrough of all BUDDI features and how to interpret your daily health readings.",
    image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=600&q=80",
    alt: "Learning journal tutorial",
  },
  {
    title: "Modules",
    description: "Short, focused video lessons on specific BUDDI features — watch at your own pace.",
    image: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?w=600&q=80",
    alt: "Tutorial modules",
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[--color-border] last:border-0">
      <button
        className="w-full flex items-center justify-between py-4 text-left font-semibold text-[--color-foreground] hover:text-[--color-primary] transition-colors"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span>{question}</span>
        <span className="ml-4 text-[--color-primary] font-bold text-xl flex-shrink-0">
          {open ? "−" : "+"}
        </span>
      </button>
      {open && (
        <p className="pb-4 text-[--color-muted] leading-relaxed">{answer}</p>
      )}
    </div>
  );
}

export default function BuddiPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-linear-to-br from-blue-50 via-white to-green-50 pt-24 pb-20">
        <div className="blob-shape blob-primary w-80 h-80 absolute top-0 right-0 -translate-y-1/2 translate-x-1/2" />
        <div className="blob-shape blob-accent w-64 h-64 absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-block px-4 py-2 bg-blue-100 rounded-full text-[--color-primary] font-semibold text-sm mb-6">
                BUDDI® Support Center
              </div>
              <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight mb-6">
                <span className="gradient-text">BUDDI</span>
                <br />
                <span className="text-[--color-foreground]">Support</span>
              </h1>
              <p className="text-xl text-[--color-muted] mb-8 max-w-xl mx-auto lg:mx-0">
                Find simple instructions, answers to common questions, and support for using your BUDDI®.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button href="#how-to-use" variant="primary" size="lg">
                  Watch How to Use
                </Button>
                <Button href="#contact" variant="outline" size="lg">
                  Contact Support
                </Button>
              </div>
            </div>
            <div className="flex-1 flex justify-center relative">
              <div className="relative">
                <div className="absolute inset-0 bg-linear-to-br from-[--color-primary] to-[--color-accent] rounded-3xl blur-3xl opacity-20 transform scale-105" />
                <Image
                  src="/images/hero-shot.png"
                  alt="Healthcare professional helping senior patient with BUDDI device"
                  width={800}
                  height={600}
                  className="rounded-3xl shadow-2xl relative z-10 w-full max-w-lg"
                  priority
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How can we help? Quick Nav */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-2 border-dashed border-[--color-primary] rounded-2xl p-8">
            <h2 className="text-2xl font-extrabold text-center text-[--color-foreground] mb-8">
              How can we help?
            </h2>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
              {helpTopics.map((topic) => (
                <a
                  key={topic.id}
                  href={`#${topic.id}`}
                  className="flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-blue-50 transition-colors group"
                >
                  <span className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-2xl group-hover:bg-[--color-primary] group-hover:text-white transition-colors">
                    {topic.icon}
                  </span>
                  <span className="text-xs font-semibold text-[--color-muted] text-center leading-tight group-hover:text-[--color-primary] transition-colors">
                    {topic.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Flow Arrow */}
      <div className="section-divider bg-white">
        <div className="flow-arrow" />
      </div>

      {/* How to use your BUDDI */}
      <Section background="white" id="how-to-use">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 flex justify-center">
            <Image
              src="https://images.unsplash.com/photo-1575540395948-d24194d58934?w=600&q=80"
              alt="BUDDI smartwatch device"
              width={500}
              height={500}
              className="rounded-2xl shadow-xl w-full max-w-sm object-cover"
              unoptimized
            />
          </div>
          <div className="flex-1" id="wearing">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-blue-500 to-blue-600 rounded-full text-white font-semibold text-sm mb-4">
              <span>⌚</span>
              Wearing Your BUDDI
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-6">
              How to use your <span className="gradient-text">BUDDI</span>
            </h2>
            <ul className="space-y-4">
              {careInstructions.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-[--color-primary] text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                    ✓
                  </span>
                  <span className="text-[--color-muted] leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Usage Steps */}
      <Section background="surface">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-extrabold text-[--color-foreground]">Getting Started</h2>
          <p className="text-[--color-muted] mt-2">Follow these simple steps to start using BUDDI</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              step: "Step 1",
              label: "Put on your BUDDI",
              desc: "Wear BUDDI on your wrist. The display should face outward and the sensors should rest against your skin.",
              img: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=600&q=80",
            },
            {
              step: "Step 2",
              label: "Sync with the app",
              desc: "Visit our FAQ section to get step-by-step guidance about syncing your device. The question-and-answer format makes it more reliable for users.",
              img: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=600&q=80",
            },
            {
              step: "Step 3",
              label: "View your readings",
              desc: "Check your vitals daily in the app. Your care team receives alerts automatically when something needs attention.",
              img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80",
            },
          ].map((s) => (
            <div key={s.step} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
              <div className="relative h-48">
                <Image
                  src={s.img}
                  alt={s.label}
                  fill
                  className="object-cover"
                  unoptimized
                />
                <div className="absolute top-4 left-4 bg-[--color-primary] text-white text-sm font-bold px-3 py-1 rounded-full">
                  {s.step}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-[--color-foreground] mb-2">{s.label}</h3>
                <p className="text-sm text-[--color-muted] leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Flow Arrow */}
      <div className="section-divider bg-linear-to-b from-[--color-surface] to-white">
        <div className="flow-arrow" />
      </div>

      {/* Proper Care */}
      <Section background="white" id="cleaning">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
          <div className="flex-1 flex justify-center">
            <Image
              src="https://images.unsplash.com/photo-1544117519-31a4b719223d?w=600&q=80"
              alt="BUDDI device care and cleaning"
              width={500}
              height={500}
              className="rounded-2xl shadow-xl w-full max-w-sm object-cover"
              unoptimized
            />
          </div>
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-green-500 to-emerald-600 rounded-full text-white font-semibold text-sm mb-4">
              <span>🧼</span>
              Proper Care
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-6">
              Proper care for{" "}
              <span className="gradient-text">accurate readings</span>
            </h2>
            <ul className="space-y-4">
              {properCareItems.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                    ✓
                  </span>
                  <span className="text-[--color-muted] leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Charging Steps */}
      <Section background="surface">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-extrabold text-[--color-foreground]">Charging Your BUDDI</h2>
          <p className="text-[--color-muted] mt-2">Keep BUDDI powered for continuous monitoring</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              step: "Step 1",
              label: "Attach the charger",
              desc: "Put the head of the magnetic charging cable on the USB magnetic charging port of the watch.",
              img: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&q=80",
            },
            {
              step: "Step 2",
              label: "Begin charging",
              desc: "Make sure this is what the screen looks like to confirm it is charging. It only takes 3-4 hours to get a full charge.",
              img: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=600&q=80",
            },
            {
              step: "Step 3",
              label: "Resume wearing",
              desc: "Once fully charged, reattach BUDDI to your wrist. Charge every 2 days or as recommended by your care team.",
              img: "https://images.unsplash.com/photo-1575540395948-d24194d58934?w=600&q=80",
            },
          ].map((s) => (
            <div key={s.step} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
              <div className="relative h-48">
                <Image
                  src={s.img}
                  alt={s.label}
                  fill
                  className="object-cover"
                  unoptimized
                />
                <div className="absolute top-4 left-4 bg-[--color-accent] text-white text-sm font-bold px-3 py-1 rounded-full">
                  {s.step}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-[--color-foreground] mb-2">{s.label}</h3>
                <p className="text-sm text-[--color-muted] leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Flow Arrow */}
      <div className="section-divider bg-linear-to-b from-[--color-surface] to-[--color-dark]">
        <div className="flow-arrow" />
      </div>

      {/* How to use BUDDI's features */}
      <Section background="gradient" id="readings">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            How to use your BUDDI&apos;s features
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            VitalFriend brings care teams, physicians, and families together on one platform — turning millions of data points into clear signals that simplify care, lighten workloads, and improve outcomes.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <div className="relative h-40">
                <Image
                  src={f.image}
                  alt={f.alt}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">{f.icon}</span>
                  <h3 className="text-white font-bold">{f.title}</h3>
                </div>
                <p className="text-white/80 text-sm leading-relaxed">{f.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Flow Arrow */}
      <div className="section-divider animated-gradient">
        <div className="flow-arrow" style={{ background: "white" }} />
      </div>

      {/* FAQ */}
      <Section background="white" id="troubleshooting">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            <span className="gradient-text">FAQ</span>
          </h2>
          <p className="text-[--color-muted]">Have a question? We have an answer.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left — common issue callout */}
          <div className="bg-linear-to-br from-blue-50 to-green-50 rounded-2xl p-8 border border-blue-100">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-10 bg-[--color-primary] text-white rounded-full flex items-center justify-center text-lg">📊</span>
              <h3 className="text-xl font-extrabold text-[--color-foreground]">My readings are off</h3>
            </div>
            <div className="space-y-3 text-[--color-muted]">
              <p>If your readings look unusual, try the following:</p>
              <ul className="space-y-2">
                {[
                  "Make sure BUDDI is snug on your wrist — not too tight, not too loose.",
                  "Stay still for at least 30 seconds during a reading.",
                  "Avoid caffeine or exercise 30 minutes before taking a reading.",
                  "Clean the sensors on the back of BUDDI with a soft, damp cloth.",
                  "If readings remain inconsistent, contact your care team.",
                ].map((tip, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[--color-primary] font-bold mt-1">•</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-4">
                <Button href="/support" variant="outline" size="sm">
                  Read More
                </Button>
              </div>
            </div>
          </div>

          {/* Right — accordion FAQs */}
          <div className="bg-white rounded-2xl border border-[--color-border] shadow-md p-6">
            {faqs.map((faq) => (
              <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </Section>

      {/* Flow Arrow */}
      <div className="section-divider bg-linear-to-b from-white to-[--color-surface]">
        <div className="flow-arrow" />
      </div>

      {/* Tutorials */}
      <Section background="surface">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            <span className="gradient-text">Tutorials</span>
          </h2>
          <p className="text-[--color-muted] max-w-2xl mx-auto">
            VitalFriend brings care teams, physicians, and families together on one platform — turning millions of data points into clear signals that simplify care, lighten workloads, and improve outcomes.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tutorials.map((t) => (
            <div
              key={t.title}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 card-hover"
            >
              <div className="relative h-52">
                <Image
                  src={t.image}
                  alt={t.alt}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-extrabold text-[--color-foreground] mb-2">{t.title}</h3>
                <p className="text-sm text-[--color-muted] leading-relaxed mb-4">{t.description}</p>
                <Button href="/support" variant="outline" size="sm">
                  Read More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Contact CTA */}
      <Section background="white" id="contact">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            Still need help?
          </h2>
          <p className="text-xl text-[--color-muted] mb-8">
            Our support team is here for you Monday – Friday, 9 AM – 6 PM EST.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="tel:+18557427300" variant="primary" size="lg">
              Call 1 (855) 742 7300
            </Button>
            <Button href="mailto:care@vitalfrnd.com" variant="outline" size="lg">
              Email Support
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
