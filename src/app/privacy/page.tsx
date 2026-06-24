import type { Metadata } from "next";
import Image from "next/image";
import s from "./privacy.module.css";

export const metadata: Metadata = {
  title: "Privacy Policy | VitalFriend",
  description:
    "Privacy Policy governing use of the VitalFriend devices and platform by Participants.",
  alternates: { canonical: "https://vitalfriend.com/privacy" },
  openGraph: { url: "https://vitalfriend.com/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className={s.pageWrapper}>
      <div className={s.blobTopRight} />
      <div className={s.blobBottomLeft} />
      <div className={s.blobMidRight} />

      <div className={s.pageInner}>
        {/* Hero */}
        <div className={s.heroRow}>
          <div className={s.heroContent}>
            <h1 className={s.heroHeading}>Privacy Policy</h1>
            <p className={s.heroBody}>
              These Terms and Conditions set forth the terms and conditions that govern use of the
              Devices and Platform by any person using a Device or the Platform
              (&ldquo;Participant&rdquo;). By accepting these Terms and Conditions, Participant
              acknowledges and agrees that VitalFriend, Inc. (&ldquo;VitalFriend&rdquo;) has
              developed the Device and Platform and that compliance with these Terms and Conditions
              is a condition of continued use.
            </p>
          </div>
          <div className={s.heroImageCol}>
            <Image
              src="/images/privacy-buddy.png"
              alt="VitalFriend Vital Buddy device"
              width={335}
              height={502}
              className={s.heroImage}
            />
          </div>
        </div>

        {/* Body content */}
        <div className={s.contentInner}>
          <h2 className={s.contentTitle}>Privacy Policy</h2>
          <p className={s.lastUpdated}>Last updated June 22, 2026</p>

          <p className={s.bodyText}>
            This Privacy Notice for VitalFriend, Inc (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
            &ldquo;our&rdquo;), describes how and why we might access, collect, store, use, and/or
            share (&ldquo;process&rdquo;) your personal information when you use our services
            (&ldquo;Services&rdquo;), including when you:
          </p>

          <ul className={s.bulletList}>
            <li className={s.bulletItem}>
              Visit our website at http://www.vitalfriend.com or any website of ours that links to
              this Privacy Notice
            </li>
            <li className={s.bulletItem}>
              Download and use our mobile application (VitalFriend), or any other application of
              ours that links to this Privacy Notice
            </li>
            <li className={s.bulletItem}>
              Engage with us in other related ways, including any marketing or events
            </li>
          </ul>

          <p className={s.bodyText} style={{ marginTop: 16 }}>
            <strong>Questions or concerns?</strong> Reading this Privacy Notice will help you
            understand your privacy rights and choices. We are responsible for making decisions about
            how your personal information is processed. If you do not agree with our policies and
            practices, please do not use our Services. If you still have any questions or concerns,
            please contact us at{" "}
            <a href="mailto:support@vitalfriend.com" className={s.link}>
              support@vitalfriend.com
            </a>
            .
          </p>

          {/* Summary of Key Points */}
          <div className={s.legalSection}>
            <h2 className={s.sectionHeading}>Summary of Key Points</h2>
            <p className={s.bodyText}>This summary provides key points from our Privacy Notice.</p>

            <div className={s.qaBlock}>
              <p className={s.bodyText}>
                <strong>What personal information do we process?</strong> When you visit, use, or
                navigate our Services, we may process personal information depending on how you
                interact with us and the Services, the choices you make, and the products and
                features you use.
              </p>
            </div>
            <div className={s.qaBlock}>
              <p className={s.bodyText}>
                <strong>Do we collect any information from third parties?</strong> We do not collect
                any information from third parties.
              </p>
            </div>
            <div className={s.qaBlock}>
              <p className={s.bodyText}>
                <strong>How do we process your information?</strong> We process your information to
                provide, improve, and administer our Services, communicate with you, for security and
                fraud prevention, and to comply with law. We may also process your information for
                other purposes with your consent. We process your information only when we have a
                valid legal reason to do so.
              </p>
            </div>
            <div className={s.qaBlock}>
              <p className={s.bodyText}>
                <strong>How do we keep your information safe?</strong> We have adequate
                organizational and technical processes and procedures in place to protect your
                personal information. However, no electronic transmission over the internet or
                information storage technology can be guaranteed to be 100% secure.
              </p>
            </div>
            <div className={s.qaBlock}>
              <p className={s.bodyText}>
                <strong>What are your rights?</strong> Depending on where you are located
                geographically, the applicable privacy law may mean you have certain rights regarding
                your personal information.
              </p>
            </div>
            <div className={s.qaBlock}>
              <p className={s.bodyText}>
                <strong>How do you exercise your rights?</strong> The easiest way to exercise your
                rights is by submitting a data subject access request, or by contacting us. We will
                consider and act upon any request in accordance with applicable data protection laws.
              </p>
            </div>
          </div>

          {/* Table of Contents */}
          <div className={s.legalSection}>
            <h2 className={s.sectionHeading}>Table of Contents</h2>
            <ul className={s.tocList}>
              <li><a href="#What-Information-Do-We-Collect" className={s.tocLink}>1. What Information Do We Collect?</a></li>
              <li><a href="#How-Do-We-Process-Your-Information" className={s.tocLink}>2. How Do We Process Your Information?</a></li>
              <li><a href="#When-and-With-Whom-Do-We-Share-Your-Personal-Information" className={s.tocLink}>3. When and With Whom Do We Share Your Personal Information?</a></li>
              <li><a href="#Do-We-Use-Cookies-and-Other-Tracking-Technologies" className={s.tocLink}>4. Do We Use Cookies and Other Tracking Technologies?</a></li>
              <li><a href="#Do-We-Offer-Artificial-Intelligence-Based-Products" className={s.tocLink}>5. Do We Offer Artificial Intelligence-Based Products?</a></li>
              <li><a href="#How-Long-Do-We-Keep-Your-Information" className={s.tocLink}>6. How Long Do We Keep Your Information?</a></li>
              <li><a href="#How-Do-We-Keep-Your-Information-Safe" className={s.tocLink}>7. How Do We Keep Your Information Safe?</a></li>
              <li><a href="#Do-We-Collect-Information-From-Minors" className={s.tocLink}>8. Do We Collect Information From Minors?</a></li>
              <li><a href="#What-Are-Your-Privacy-Rights" className={s.tocLink}>9. What Are Your Privacy Rights?</a></li>
              <li><a href="#Controls-for-Do-Not-Track-Features" className={s.tocLink}>10. Controls for Do-Not-Track Features</a></li>
              <li><a href="#Do-United-States-Residents-Have-Specific-Privacy-Rights" className={s.tocLink}>11. Do United States Residents Have Specific Privacy Rights?</a></li>
              <li><a href="#Do-We-Make-Updates-to-This-Notice" className={s.tocLink}>12. Do We Make Updates to This Notice?</a></li>
              <li><a href="#How-Can-You-Contact-Us-About-This-Notice" className={s.tocLink}>13. How Can You Contact Us About This Notice?</a></li>
              <li><a href="#How-Can-You-Review-Update-or-Delete-the-Data-We-Collect-From-You" className={s.tocLink}>14. How Can You Review, Update, or Delete the Data We Collect From You?</a></li>
            </ul>
          </div>

          {/* 1. What Information Do We Collect? */}
          <div className={s.legalSection} id="What-Information-Do-We-Collect">
            <h2 className={s.sectionHeading}>1. What Information Do We Collect?</h2>
            <p className={s.subHeading}>Personal information you disclose to us</p>
            <p className={s.inShort}>In Short: We collect personal information that you provide to us.</p>
            <p className={s.bodyText}>
              We collect personal information that you voluntarily provide to us when you register on
              the Services, express an interest in obtaining information about us or our products and
              Services, when you participate in activities on the Services, or otherwise when you
              contact us.
            </p>
            <p className={s.bodyText}>
              <strong>Personal Information Provided by You.</strong> The personal information that we
              collect depends on the context of your interactions with us and the Services, the
              choices you make, and the products and features you use. The personal information we
              collect may include the following:
            </p>
            <ul className={s.bulletList}>
              <li className={s.bulletItem}>names</li>
              <li className={s.bulletItem}>phone numbers</li>
              <li className={s.bulletItem}>email addresses</li>
              <li className={s.bulletItem}>usernames</li>
              <li className={s.bulletItem}>passwords</li>
              <li className={s.bulletItem}>contact preferences</li>
              <li className={s.bulletItem}>contact or authentication data</li>
            </ul>
            <p className={s.bodyText} style={{ marginTop: 16 }}>
              <strong>Application Data.</strong> If you use our application(s), we also may collect
              the following information if you choose to provide us with access or permission:
            </p>
            <ul className={s.bulletList}>
              <li className={s.bulletItem}>
                <em>Geolocation Information.</em> We may request access or permission to track
                location-based information from your mobile device, either continuously or while you
                are using our mobile application(s), to provide certain location-based services.
              </li>
              <li className={s.bulletItem}>
                <em>Mobile Device Access.</em> We may request access or permission to certain
                features from your mobile device, including your mobile device&apos;s bluetooth,
                camera, microphone, sms messages, and other features.
              </li>
              <li className={s.bulletItem}>
                <em>Mobile Device Data.</em> We automatically collect device information (such as
                your mobile device ID, model, and manufacturer), operating system, version
                information and system configuration information, device and application
                identification numbers, browser type and version, hardware model Internet service
                provider and/or mobile carrier, and Internet Protocol (IP) address (or proxy server).
              </li>
              <li className={s.bulletItem}>
                <em>Push Notifications.</em> We may request to send you push notifications regarding
                your account or certain features of the application(s). If you wish to opt out from
                receiving these types of communications, you may turn them off in your device&apos;s
                settings.
              </li>
            </ul>
            <p className={s.bodyText} style={{ marginTop: 16 }}>
              All personal information that you provide to us must be true, complete, and accurate,
              and you must notify us of any changes to such personal information.
            </p>
          </div>

          {/* 2. How Do We Process Your Information? */}
          <div className={s.legalSection} id="How-Do-We-Process-Your-Information">
            <h2 className={s.sectionHeading}>2. How Do We Process Your Information?</h2>
            <p className={s.inShort}>
              In Short: We process your information to provide, improve, and administer our Services,
              communicate with you, for security and fraud prevention, and to comply with law.
            </p>
            <p className={s.bodyText}>
              We process your personal information for a variety of reasons, depending on how you
              interact with our Services, including:
            </p>
            <ul className={s.bulletList}>
              <li className={s.bulletItem}>
                <strong>To facilitate account creation and authentication and otherwise manage user accounts.</strong>{" "}
                We may process your information so you can create and log in to your account, as well
                as keep your account in working order.
              </li>
              <li className={s.bulletItem}>
                <strong>To respond to user inquiries/offer support to users.</strong> We may process
                your information to respond to your inquiries and solve any potential issues you might
                have with the requested service.
              </li>
              <li className={s.bulletItem}>
                <strong>To request feedback.</strong> We may process your information when necessary
                to request feedback and to contact you about your use of our Services.
              </li>
            </ul>
          </div>

          {/* 3. When and With Whom Do We Share Your Personal Information? */}
          <div className={s.legalSection} id="When-and-With-Whom-Do-We-Share-Your-Personal-Information">
            <h2 className={s.sectionHeading}>3. When and With Whom Do We Share Your Personal Information?</h2>
            <p className={s.inShort}>
              In Short: We may share information in specific situations described in this section
              and/or with the following third parties.
            </p>
            <p className={s.bodyText}>
              We may need to share your personal information in the following situations:
            </p>
            <ul className={s.bulletList}>
              <li className={s.bulletItem}>
                <strong>Business Transfers.</strong> We may share or transfer your information in
                connection with, or during negotiations of, any merger, sale of company assets,
                financing, or acquisition of all or a portion of our business to another company.
              </li>
            </ul>
          </div>

          {/* 4. Do We Use Cookies and Other Tracking Technologies? */}
          <div className={s.legalSection} id="Do-We-Use-Cookies-and-Other-Tracking-Technologies">
            <h2 className={s.sectionHeading}>4. Do We Use Cookies and Other Tracking Technologies?</h2>
            <p className={s.inShort}>
              In Short: We may use cookies and other tracking technologies to collect and store your
              information.
            </p>
            <p className={s.bodyText}>
              We may use cookies and similar tracking technologies (like web beacons and pixels) to
              gather information when you interact with our Services. Some online tracking
              technologies help us maintain the security of our Services and your account, prevent
              crashes, fix bugs, save your preferences, and assist with basic site functions.
            </p>
            <p className={s.bodyText}>
              To the extent these online tracking technologies are deemed to be a
              &ldquo;sale&rdquo;/&ldquo;sharing&rdquo; (which includes targeted advertising, as
              defined under the applicable laws) under applicable US state laws, you can opt out of
              these online tracking technologies by submitting a request as described below under
              section &ldquo;DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?&rdquo;
            </p>
          </div>

          {/* 5. Do We Offer Artificial Intelligence-Based Products? */}
          <div className={s.legalSection} id="Do-We-Offer-Artificial-Intelligence-Based-Products">
            <h2 className={s.sectionHeading}>5. Do We Offer Artificial Intelligence-Based Products?</h2>
            <p className={s.inShort}>
              In Short: We offer products, features, or tools powered by artificial intelligence,
              machine learning, or similar technologies.
            </p>
            <p className={s.bodyText}>
              As part of our Services, we offer products, features, or tools powered by artificial
              intelligence, machine learning, or similar technologies (collectively, &ldquo;AI
              Products&rdquo;). These tools are designed to enhance your experience and provide you
              with innovative solutions. The terms in this Privacy Notice govern your use of the AI
              Products within our Services.
            </p>
            <p className={s.subHeading}>Use of AI Technologies</p>
            <p className={s.bodyText}>
              We provide the AI Products through third-party service providers (&ldquo;AI Service
              Providers&rdquo;), including Anthropic, Google Gemini &amp; OpenAI. As outlined in this Privacy Notice, your input,
              output, and personal information will be shared with and processed by these AI Service
              Providers to enable your use of our AI Products. You must not use the AI Products in
              any way that violates the terms or policies of any AI Service Provider.
            </p>
            <p className={s.subHeading}>Our AI Products</p>
            <p className={s.bodyText}>
              Our AI Products are designed for the following functions:
            </p>
            <ul className={s.bulletList}>
              <li className={s.bulletItem}>AI insights</li>
            </ul>
            <p className={s.subHeading}>How We Process Your Data Using AI</p>
            <p className={s.bodyText}>
              All personal information processed using our AI Products is handled in line with our
              Privacy Notice and our agreement with third parties. This ensures high security and
              safeguards your personal information throughout the process, giving you peace of mind
              about your data&apos;s safety.
            </p>
          </div>

          {/* 6. How Long Do We Keep Your Information? */}
          <div className={s.legalSection} id="How-Long-Do-We-Keep-Your-Information">
            <h2 className={s.sectionHeading}>6. How Long Do We Keep Your Information?</h2>
            <p className={s.inShort}>
              In Short: We keep your information for as long as necessary to fulfill the purposes
              outlined in this Privacy Notice unless otherwise required by law.
            </p>
            <p className={s.bodyText}>
              We will only keep your personal information for as long as it is necessary for the
              purposes set out in this Privacy Notice, unless a longer retention period is required
              or permitted by law (such as tax, accounting, or other legal requirements). No purpose
              in this notice will require us keeping your personal information for longer than three
              (3) months past the termination of the user&apos;s account.
            </p>
            <p className={s.bodyText}>
              When we have no ongoing legitimate business need to process your personal information,
              we will either delete or anonymize such information, or, if this is not possible (for
              example, because your personal information has been stored in backup archives), then we
              will securely store your personal information and isolate it from any further processing
              until deletion is possible.
            </p>
          </div>

          {/* 7. How Do We Keep Your Information Safe? */}
          <div className={s.legalSection} id="How-Do-We-Keep-Your-Information-Safe">
            <h2 className={s.sectionHeading}>7. How Do We Keep Your Information Safe?</h2>
            <p className={s.inShort}>
              In Short: We protect your personal information through a system of organizational and
              technical security measures.
            </p>
            <p className={s.bodyText}>
              We have implemented appropriate and reasonable technical and organizational security
              measures designed to protect the security of any personal information we process.
              However, despite our safeguards and efforts to secure your information, no electronic
              transmission over the Internet or information storage technology can be guaranteed to be
              100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other
              unauthorized third parties will not be able to defeat our security and improperly
              collect, access, steal, or modify your information. Although we will do our best to
              protect your personal information, transmission of personal information to and from our
              Services is at your own risk. You should only access the Services within a secure
              environment.
            </p>
          </div>

          {/* 8. Do We Collect Information From Minors? */}
          <div className={s.legalSection} id="Do-We-Collect-Information-From-Minors">
            <h2 className={s.sectionHeading}>8. Do We Collect Information From Minors?</h2>
            <p className={s.inShort}>
              In Short: We do not knowingly collect data from or market to children under 18 years of
              age.
            </p>
            <p className={s.bodyText}>
              We do not knowingly collect, solicit data from, or market to children under 18 years of
              age, nor do we knowingly sell such personal information. By using the Services, you
              represent that you are at least 18 or that you are the parent or guardian of such a
              minor and consent to such minor dependent&apos;s use of the Services. If we learn that
              personal information from users less than 18 years of age has been collected, we will
              deactivate the account and take reasonable measures to promptly delete such data from
              our records. If you become aware of any data we may have collected from children under
              age 18, please contact us at{" "}
              <a href="mailto:support@vitalfriend.com" className={s.link}>
                support@vitalfriend.com
              </a>
              .
            </p>
          </div>

          {/* 9. What Are Your Privacy Rights? */}
          <div className={s.legalSection} id="What-Are-Your-Privacy-Rights">
            <h2 className={s.sectionHeading}>9. What Are Your Privacy Rights?</h2>
            <p className={s.inShort}>
              In Short: You may review, change, or terminate your account at any time, depending on
              your country, province, or state of residence.
            </p>
            <p className={s.bodyText}>
              <strong>Withdrawing your consent:</strong> If we are relying on your consent to process
              your personal information, which may be express and/or implied consent depending on the
              applicable law, you have the right to withdraw your consent at any time. You can
              withdraw your consent at any time by contacting us by using the contact details
              provided in the section &ldquo;HOW CAN YOU CONTACT US ABOUT THIS NOTICE?&rdquo; below.
            </p>
            <p className={s.bodyText}>
              However, please note that this will not affect the lawfulness of the processing before
              its withdrawal nor, when applicable law allows, will it affect the processing of your
              personal information conducted in reliance on lawful processing grounds other than
              consent.
            </p>
            <p className={s.subHeading}>Account Information</p>
            <p className={s.bodyText}>
              If you would at any time like to review or change the information in your account or
              terminate your account, you can:
            </p>
            <ul className={s.bulletList}>
              <li className={s.bulletItem}>Log in to your account settings and update your user account.</li>
              <li className={s.bulletItem}>Contact us using the contact information provided.</li>
            </ul>
            <p className={s.bodyText} style={{ marginTop: 16 }}>
              Upon your request to terminate your account, we will deactivate or delete your account
              and information from our active databases. However, we may retain some information in
              our files to prevent fraud, troubleshoot problems, assist with any investigations,
              enforce our legal terms and/or comply with applicable legal requirements.
            </p>
            <p className={s.bodyText}>
              <strong>Cookies and similar technologies:</strong> Most Web browsers are set to accept
              cookies by default. If you prefer, you can usually choose to set your browser to remove
              cookies and to reject cookies. If you choose to remove cookies or reject cookies, this
              could affect certain features or services of our Services.
            </p>
            <p className={s.bodyText}>
              If you have questions or comments about your privacy rights, you may email us at{" "}
              <a href="mailto:support@vitalfriend.com" className={s.link}>
                support@vitalfriend.com
              </a>
              .
            </p>
          </div>

          {/* 10. Controls for Do-Not-Track Features */}
          <div className={s.legalSection} id="Controls-for-Do-Not-Track-Features">
            <h2 className={s.sectionHeading}>10. Controls for Do-Not-Track Features</h2>
            <p className={s.bodyText}>
              Most web browsers and some mobile operating systems and mobile applications include a
              Do-Not-Track (&ldquo;DNT&rdquo;) feature or setting you can activate to signal your
              privacy preference not to have data about your online browsing activities monitored and
              collected. At this stage, no uniform technology standard for recognizing and
              implementing DNT signals has been finalized. As such, we do not currently respond to
              DNT browser signals or any other mechanism that automatically communicates your choice
              not to be tracked online. If a standard for online tracking is adopted that we must
              follow in the future, we will inform you about that practice in a revised version of
              this Privacy Notice.
            </p>
            <p className={s.bodyText}>
              California law requires us to let you know how we respond to web browser DNT signals.
              Because there currently is not an industry or legal standard for recognizing or honoring
              DNT signals, we do not respond to them at this time.
            </p>
          </div>

          {/* 11. Do United States Residents Have Specific Privacy Rights? */}
          <div className={s.legalSection} id="Do-United-States-Residents-Have-Specific-Privacy-Rights">
            <h2 className={s.sectionHeading}>11. Do United States Residents Have Specific Privacy Rights?</h2>
            <p className={s.inShort}>
              In Short: If you are a resident of California, Colorado, Connecticut, Delaware, Florida,
              Indiana, Iowa, Kentucky, Maryland, Minnesota, Montana, Nebraska, New Hampshire, New
              Jersey, Oregon, Rhode Island, Tennessee, Texas, Utah, or Virginia, you may have the
              right to request access to and receive details about the personal information we
              maintain about you and how we have processed it, correct inaccuracies, get a copy of,
              or delete your personal information.
            </p>
            <p className={s.subHeading}>Categories of Personal Information We Collect</p>
            <p className={s.bodyText}>
              The table below shows the categories of personal information we have collected in the
              past twelve (12) months.
            </p>
            <div className={s.tableWrapper}>
              <table className={s.dataTable}>
                <thead>
                  <tr>
                    <th>Category</th>
                    <th>Examples</th>
                    <th>Collected</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>A. Identifiers</strong></td>
                    <td>Contact details, such as real name, alias, postal address, telephone or mobile contact number, unique personal identifier, online identifier, Internet Protocol address, email address, and account name</td>
                    <td><span className={s.collectedYes}>YES</span></td>
                  </tr>
                  <tr>
                    <td><strong>B. Personal information (CA)</strong></td>
                    <td>Name, contact information, education, employment, employment history, and financial information</td>
                    <td><span className={s.collectedNo}>NO</span></td>
                  </tr>
                  <tr>
                    <td><strong>C. Protected classification</strong></td>
                    <td>Gender, age, date of birth, race and ethnicity, national origin, marital status, and other demographic data</td>
                    <td><span className={s.collectedNo}>NO</span></td>
                  </tr>
                  <tr>
                    <td><strong>D. Commercial information</strong></td>
                    <td>Transaction information, purchase history, financial details, and payment information</td>
                    <td><span className={s.collectedNo}>NO</span></td>
                  </tr>
                  <tr>
                    <td><strong>E. Biometric information</strong></td>
                    <td>Fingerprints and voiceprints</td>
                    <td><span className={s.collectedNo}>NO</span></td>
                  </tr>
                  <tr>
                    <td><strong>F. Internet activity</strong></td>
                    <td>Browsing history, search history, online behavior, interest data, and interactions with our and other websites, applications, systems, and advertisements</td>
                    <td><span className={s.collectedNo}>NO</span></td>
                  </tr>
                  <tr>
                    <td><strong>G. Geolocation data</strong></td>
                    <td>Device location</td>
                    <td><span className={s.collectedNo}>NO</span></td>
                  </tr>
                  <tr>
                    <td><strong>H. Audio/sensory information</strong></td>
                    <td>Images and audio, video or call recordings created in connection with our business activities</td>
                    <td><span className={s.collectedNo}>NO</span></td>
                  </tr>
                  <tr>
                    <td><strong>I. Professional information</strong></td>
                    <td>Business contact details in order to provide you our Services at a business level or job title, work history, and professional qualifications if you apply for a job with us</td>
                    <td><span className={s.collectedNo}>NO</span></td>
                  </tr>
                  <tr>
                    <td><strong>J. Education Information</strong></td>
                    <td>Student records and directory information</td>
                    <td><span className={s.collectedNo}>NO</span></td>
                  </tr>
                  <tr>
                    <td><strong>K. Inferences</strong></td>
                    <td>Inferences drawn from any of the collected personal information listed above to create a profile or summary about, for example, an individual&apos;s preferences and characteristics</td>
                    <td><span className={s.collectedNo}>NO</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className={s.bodyText}>
              We only collect sensitive personal information, as defined by applicable privacy laws or
              the purposes allowed by law or with your consent. Sensitive personal information may be
              used, or disclosed to a service provider or contractor, for additional, specified
              purposes. You may have the right to limit the use or disclosure of your sensitive
              personal information.
            </p>
            <p className={s.subHeading}>Your Rights</p>
            <p className={s.bodyText}>
              You have rights under certain US state data protection laws. However, these rights are
              not absolute, and in certain cases, we may decline your request as permitted by law.
              These rights include:
            </p>
            <ul className={s.bulletList}>
              <li className={s.bulletItem}><strong>Right to know</strong> whether or not we are processing your personal data</li>
              <li className={s.bulletItem}><strong>Right to access</strong> your personal data</li>
              <li className={s.bulletItem}><strong>Right to correct</strong> inaccuracies in your personal data</li>
              <li className={s.bulletItem}><strong>Right to request</strong> the deletion of your personal data</li>
              <li className={s.bulletItem}><strong>Right to obtain a copy</strong> of the personal data you previously shared with us</li>
              <li className={s.bulletItem}><strong>Right to non-discrimination</strong> for exercising your rights</li>
              <li className={s.bulletItem}><strong>Right to opt out</strong> of the processing of your personal data if it is used for targeted advertising, the sale of personal data, or profiling</li>
            </ul>
            <p className={s.subHeading}>How to Exercise Your Rights</p>
            <p className={s.bodyText}>
              To exercise these rights, you can contact us by submitting a data subject access
              request, by emailing us at{" "}
              <a href="mailto:support@vitalfriend.com" className={s.link}>support@vitalfriend.com</a>, by
              visiting{" "}
              <a href="https://vitalfriend.com" className={s.link}>
                https://vitalfriend.com
              </a>
              , or by referring to the contact details at the bottom of this document.
            </p>
            <p className={s.subHeading}>Request Verification</p>
            <p className={s.bodyText}>
              Upon receiving your request, we will need to verify your identity to determine you are
              the same person about whom we have the information in our system. We will only use
              personal information provided in your request to verify your identity or authority to
              make the request.
            </p>
            <p className={s.subHeading}>Appeals</p>
            <p className={s.bodyText}>
              Under certain US state data protection laws, if we decline to take action regarding
              your request, you may appeal our decision by emailing us at{" "}
              <a href="mailto:support@vitalfriend.com" className={s.link}>support@vitalfriend.com</a>. We will
              inform you in writing of any action taken or not taken in response to the appeal,
              including a written explanation of the reasons for the decisions. If your appeal is
              denied, you may submit a complaint to your state attorney general.
            </p>
            <p className={s.subHeading}>California &ldquo;Shine The Light&rdquo; Law</p>
            <p className={s.bodyText}>
              California Civil Code Section 1798.83, also known as the &ldquo;Shine The Light&rdquo;
              law, permits our users who are California residents to request and obtain from us, once
              a year and free of charge, information about categories of personal information (if any)
              we disclosed to third parties for direct marketing purposes and the names and addresses
              of all third parties with which we shared personal information in the immediately
              preceding calendar year.
            </p>
          </div>

          {/* 12. Do We Make Updates to This Notice? */}
          <div className={s.legalSection} id="Do-We-Make-Updates-to-This-Notice">
            <h2 className={s.sectionHeading}>12. Do We Make Updates to This Notice?</h2>
            <p className={s.inShort}>
              In Short: Yes, we will update this notice as necessary to stay compliant with relevant
              laws.
            </p>
            <p className={s.bodyText}>
              We may update this Privacy Notice from time to time. The updated version will be
              indicated by an updated &ldquo;Revised&rdquo; date at the top of this Privacy Notice.
              If we make material changes to this Privacy Notice, we may notify you either by
              prominently posting a notice of such changes or by directly sending you a notification.
              We encourage you to review this Privacy Notice frequently to be informed of how we are
              protecting your information.
            </p>
          </div>

          {/* 13. How Can You Contact Us About This Notice? */}
          <div className={s.legalSection} id="How-Can-You-Contact-Us-About-This-Notice">
            <h2 className={s.sectionHeading}>13. How Can You Contact Us About This Notice?</h2>
            <p className={s.bodyText}>
              If you have questions or comments about this notice, you may email us at{" "}
              <a href="mailto:support@vitalfriend.com" className={s.link}>support@vitalfriend.com</a> or contact
              us by post at:
            </p>
            <div className={s.addressBlock}>
              VitalFriend, Inc<br />
              1218 Mateo Miller Cir<br />
              San Ramon, CA 94583<br />
              United States
            </div>
          </div>

          {/* 14. How Can You Review, Update, or Delete the Data We Collect From You? */}
          <div className={s.legalSection} id="How-Can-You-Review-Update-or-Delete-the-Data-We-Collect-From-You">
            <h2 className={s.sectionHeading}>14. How Can You Review, Update, or Delete the Data We Collect From You?</h2>
            <p className={s.bodyText}>
              Based on the applicable laws of your country or state of residence in the US, you may
              have the right to request access to the personal information we collect from you,
              details about how we have processed it, correct inaccuracies, or delete your personal
              information. You may also have the right to withdraw your consent to our processing of
              your personal information. These rights may be limited in some circumstances by
              applicable law. To request to review, update, or delete your personal information,
              please contact us using the information provided in section 13 above.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
