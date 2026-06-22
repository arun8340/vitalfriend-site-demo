import type { Metadata } from "next";
import Image from "next/image";
import s from "./terms.module.css";

export const metadata: Metadata = {
  title: "Terms and Conditions | VitalFriend",
  description:
    "Terms and Conditions governing use of VitalFriend devices and platform by Participants.",
  alternates: { canonical: "https://vitalfriend.com/terms" },
  openGraph: { url: "https://vitalfriend.com/terms" },
};

export default function TermsPage() {
  return (
    <div className={s.pageWrapper}>
      <div className={s.blobTopRight} />
      <div className={s.blobBottomLeft} />
      <div className={s.blobMidRight} />

      <div className={s.pageInner}>
        {/* ── Hero row: text + image ── */}
        <div className={s.heroRow}>
          <div className={s.heroContent}>
            <h1 className={s.heroHeading}>Terms and Conditions</h1>
            <p className={s.heroBody}>
              These Terms and Conditions (these &ldquo;Terms and Conditions&rdquo;) set forth the
              terms and conditions that govern use of the Devices and Platform (as such terms are
              defined below) by any person using a Device or the Platform
              (&ldquo;Participant&rdquo;). These Terms and Conditions, together with the
              Authorization Form (as defined below), are referred to as the
              &ldquo;Agreement&rdquo;. By accepting these Terms and Conditions, Participant
              acknowledges and agrees that the provider making a Device available to Participant
              (&ldquo;Provider&rdquo;) has contracted with VitalFriend, Inc.
              (&ldquo;VitalFriend&rdquo;) to assist with the provision of the Device and the
              Platform to Participant and to facilitate Provider&apos;s provision of remote
              patient monitoring services to Participant, as may be applicable, and Participant
              acknowledges and agrees that compliance with these Terms and Conditions is a
              condition of continued use of the Device and Platform from Provider.
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

        {/* ── Content ── */}
        <div className={s.contentInner}>

          {/* About VitalFriend */}
          <div className={s.aboutBlock}>
            <h2 className={s.aboutHeading}>About VitalFriend</h2>
            <p className={s.bodyText}>
              VitalFriend has developed and is the owner of certain wearable devices (including
              Vital Buddy (as defined below), each a &ldquo;Device&rdquo;) that capture certain vital
              signs of users. VitalFriend has also developed a software platform (the
              &ldquo;Platform&rdquo;) designed to help users and their designees monitor and
              interpret data collected by a Device (such data, collectively, &ldquo;Participant
              Data&rdquo;).
            </p>
          </div>

          {/* 1. Definitions */}
          <div className={s.legalSection}>
            <h2 className={s.sectionHeading}>1. Definitions.</h2>
            <ul className={s.subList}>
              <li className={s.subItem}>
                <strong>1.1.</strong> &ldquo;Applicable Laws&rdquo; means all applicable local,
                state, national, and international laws, rules, and regulations in connection with
                and as applicable to a party&apos;s rights or obligations under this Agreement.
              </li>
              <li className={s.subItem}>
                <strong>1.2.</strong> &ldquo;Authorization Form&rdquo; means the authorization
                form between VitalFriend and Participant into which this Agreement is incorporated
                by reference.
              </li>
              <li className={s.subItem}>
                <strong>1.3.</strong> &ldquo;Vital Buddy&rdquo; means VitalFriend&apos;s proprietary
                Biometric Unified Data Delivery Interface Device.
              </li>
              <li className={s.subItem}>
                <strong>1.4.</strong> &ldquo;Documentation&rdquo; means VitalFriend&apos;s user
                guides and other end user documentation for the Devices and/or the Platform made
                available by VitalFriend from time to time.
              </li>
              <li className={s.subItem}>
                <strong>1.5.</strong> &ldquo;Fees&rdquo; means any fees applicable to
                Participant&apos;s use of the Device and Platform, whether paid to VitalFriend or
                to a Third Party providing Participant with the Device.
              </li>
              <li className={s.subItem}>
                <strong>1.6.</strong> &ldquo;Maintenance and Support&rdquo; means the ongoing
                maintenance and support of the Devices and Platform.
              </li>
              <li className={s.subItem}>
                <strong>1.7.</strong> &ldquo;Output&rdquo; means any results or information
                generated by or through the Platform based on Participant Data, whether or not
                generated by artificial intelligence technologies. Output includes any information
                or content produced by the Platform based on Participant Data, as well as any
                information relating to or arising from Participant&apos;s use of the Platform.
              </li>
              <li className={s.subItem}>
                <strong>1.8.</strong> &ldquo;Third Party&rdquo; means any individual or entity
                other than VitalFriend, Participant, or Provider, including other medical
                professionals, medical facilities, doctors&apos; offices, and clinics.
              </li>
              <li className={s.subItem}>
                <strong>1.9.</strong> &ldquo;VitalFriend Materials&rdquo; means the Devices,
                Documentation, Platform, and any other information or materials made available by
                VitalFriend to Participant.
              </li>
              <li className={s.subItem}>
                <strong>1.10.</strong> &ldquo;Authorization Form&rdquo; means the authorization
                form between VitalFriend and Participant into which this Agreement is incorporated
                by reference.
              </li>
            </ul>
          </div>

          {/* 2. Devices */}
          <div className={s.legalSection}>
            <h2 className={s.sectionHeading}>2. Devices.</h2>
            <ul className={s.subList}>
              <li className={s.subItem}>
                <strong>2.1.</strong> Device Access. Upon receipt of the applicable Fees,
                Participant will receive a Device from VitalFriend or the Provider.
              </li>
              <li className={s.subItem}>
                <strong>2.2.</strong> Licensed Devices. Each Device is licensed to Participant
                pursuant to an arrangement between VitalFriend and Provider; VitalFriend shall be
                at all times the owner of all Devices. VitalFriend hereby grants to Participant a
                limited, non-exclusive, non-sublicensable, non-transferable, revocable license to
                receive and use the Device solely during the Term.
              </li>
              <li className={s.subItem}>
                <strong>2.3.</strong> <strong>Damaged or Non-Conforming Devices.</strong>
                <ul className={s.subSubList}>
                  <li className={s.subSubItem}>
                    <strong>2.3.1</strong> In the event Participant receives a Device that is
                    damaged or does not operate in material conformance with the Documentation,
                    Participant shall promptly (and in any case within five (5) days of receipt of
                    the Device) notify VitalFriend or the Provider that provided the Device to
                    Participant of such damage or nonconformance. VitalFriend may request, in its
                    reasonable discretion, photographs or other evidence of such damage or
                    non-conformance, which Participant shall promptly provide. Upon confirming such
                    damage or non-conformance, VitalFriend, in its reasonable discretion, shall
                    either (a) use commercially reasonable efforts to promptly repair such Device
                    or otherwise address the non-conformity, or (b) replace the Device with a new
                    Device. Additional Fees may apply.
                  </li>
                  <li className={s.subSubItem}>
                    <strong>2.3.2</strong> Except as expressly set forth in Section 2.3.1, if
                    there is damage for any Device in the possession or control of Participant, or
                    if any such Device is lost, Participant shall promptly (and in any case within
                    two (2) days) notify VitalFriend. VitalFriend may request that Participant
                    promptly (but in no less than five (5) days) return such damaged Device to
                    VitalFriend using a nationally recognized carrier, at Participant&apos;s
                    expense. VitalFriend or Provider may provide a replacement Device. Additional
                    Fees may apply.
                  </li>
                </ul>
              </li>
              <li className={s.subItem}>
                <strong>2.4.</strong> Return of Devices. Upon termination or expiration of this
                Agreement, Participant shall return the Device to VitalFriend or to Provider as
                specified by VitalFriend in writing.
              </li>
              <li className={s.subItem}>
                <strong>2.5.</strong> Maintenance and Support. VitalFriend shall use commercially
                reasonable efforts to provide all Maintenance and Support for the Devices in
                accordance with the terms of this Agreement. All Maintenance and Support shall be
                provided remotely. If Participant requests in-person Maintenance or Support,
                VitalFriend may agree to such in-person Maintenance and Support on a case-by-case
                basis at VitalFriend&apos;s then-current hourly rates.
              </li>
            </ul>
          </div>

          {/* 3. Platform License and Usage */}
          <div className={s.legalSection}>
            <h2 className={s.sectionHeading}>3. Platform License and Usage.</h2>
            <ul className={s.subList}>
              <li className={s.subItem}>
                <strong>3.1.</strong> Platform License. Subject to the terms of this Agreement,
                VitalFriend hereby grants to Participant a limited, non-exclusive,
                non-transferable, non-sublicensable license, during the Term to access and use the
                Platform solely in connection with Participant&apos;s use of the Device.
              </li>
              <li className={s.subItem}>
                <strong>3.2.</strong> Use Restrictions. Participant will not, and will not permit
                any other person to, directly or indirectly: (a) reverse engineer, decompile,
                disassemble or otherwise attempt to discover the source code, object code or
                underlying structure, ideas, know-how or algorithms relevant to the Platform;
                (b) modify, translate, or create derivative works based on the Platform or the
                Participant Data (except to the extent expressly permitted by VitalFriend);
                (c) use the Platform for timesharing or service bureau purposes or otherwise for
                the benefit of a Third Party; (d) use any robot, spider, scraper, off-line reader,
                data mining tool, data gathering or extraction tool, or any other automated means
                to access the Platform in a manner that sends more request messages to the servers
                running the Platform than a human can reasonably produce in the same period of time
                by using a conventional on-line web browser; (e) use any content available on or
                via the Platform (including any caption information, keywords, or other metadata)
                for any machine learning and/or artificial intelligence training or development
                purposes, or for any technologies designed or intended for the identification of
                natural persons; (f) use the Platform in any manner or for any purpose that
                (i) violates, or promotes the violation of, any applicable law, contractual
                obligation, or right of any person, including intellectual property rights, privacy
                rights, and/or rights of personality, (ii) is fraudulent, false, deceptive, or
                defamatory, (iii) promotes hatred, violence, or harm against any individual or
                group, or (iv) otherwise may be harmful or objectionable (in VitalFriend&apos;s
                sole discretion) to VitalFriend or to VitalFriend&apos;s providers, suppliers,
                users, or any other Third Party; or (g) remove any proprietary notices or labels
                from the Platform.
              </li>
              <li className={s.subItem}>
                <strong>3.3.</strong> Maintenance and Support. VitalFriend shall use commercially
                reasonable efforts to provide all Maintenance and Support for the Platform. All
                Maintenance and Support shall be provided remotely. If Participant requests
                in-person Maintenance and Support for the Platform, VitalFriend may agree to such
                in-person Maintenance and Support on a case-by-case basis at
                VitalFriend&apos;s then-current hourly rates.
              </li>
            </ul>
          </div>

          {/* 4. Device and Platform Limitations */}
          <div className={s.legalSection}>
            <h2 className={s.sectionHeading}>4. Device and Platform Limitations.</h2>
            <p className={s.bodyText}>
              Participant acknowledges and agrees that, unless otherwise specified in the
              Authorization Form: (a) VitalFriend shall not provide any human monitoring of any
              Device, the Platform, or any Participant Data obtained through a Device or generated
              by the Platform, or any medical review of any Participant Data obtained through a
              Device or generated by the Platform; (b) VitalFriend shall not provide 24/7
              monitoring of the Participant Data obtained through any Device or generated by the
              Platform; (c) automatic alerts may be issued based on specific Participant Data
              obtained through a Device or generated by the Platform, and such alerts will be
              solely in the form of an email to the emergency contact(s) identified by a
              Participant in the Account associated with the Device or Platform, which, at the
              Participant&apos;s discretion, may include Participant&apos;s medical provider;
              (d) VitalFriend will not provide any live or human alerts or review of any automated
              alerts issued by the Platform. VitalFriend shall have no liability, and expressly
              disclaims any and all liability, with respect to monitoring the Platform or
              Participant Data or any automatic alerts issued by the Platform. Notwithstanding the
              foregoing, VitalFriend may agree to facilitate Provider&apos;s provision of some or
              all of the services described in this Section 4, including if or to the extent
              Provider offers, and Participant consents to, remote patient monitoring services.
            </p>
          </div>

          {/* 5. Fees */}
          <div className={s.legalSection}>
            <h2 className={s.sectionHeading}>5. Fees.</h2>
            <p className={s.bodyText}>
              Participant will pay any and all Fees for access to and use of the Device and
              Platform, and for any related remote patient monitoring services, as applicable, to
              Provider.
            </p>
          </div>

          {/* 6. Confidentiality */}
          <div className={s.legalSection}>
            <h2 className={s.sectionHeading}>6. Confidentiality.</h2>
            <p className={s.bodyText}>
              Each party may from time to time disclose Confidential Information to the other
              party. &ldquo;Confidential Information&rdquo; as used herein means all nonpublic
              information of a party, including concerning the business, technology, intellectual
              property, internal structure and strategies of such party, its affiliates, and any
              of its medical providers, vendors, suppliers, or other individuals or entities with
              which they do business that is conveyed to the other party orally or in tangible
              form, or non-public personal, health, and medical information of a party. Each party
              will keep in confidence and trust and will not disclose or disseminate or permit any
              employee, agent, representative, independent contractor or other person under its
              direction to disclose or disseminate the existence, source content or substance of
              any Confidential Information to any other person. Each party will employ at least
              the same methods and degree of care, but no less than a reasonable degree of care,
              to prevent disclosure of the Confidential Information as it employs with respect to
              its own Confidential Information. Confidential Information does not include
              information that: (a) is or becomes publicly available without breach of this
              Agreement; (b) the receiving party lawfully receives from a Provider or other Third
              Party not subject to a restriction on disclosure or other non-disclosure obligation;
              (c) the receiving party knew prior to receiving such information from the disclosing
              party, as demonstrated by files in existence at the time of disclosure; or
              (d) the receiving party develops or
              acquires independently without use of or reference to the disclosing
              party&apos;s Confidential Information. It shall not be a breach of this Agreement
              for a party to disclose Confidential Information if compelled to do so under
              Applicable Laws or in a judicial or other governmental investigation or proceeding,
              provided that, to the extent permitted by Applicable Laws, the disclosing party has
              been given prior notice to permit such disclosing party a reasonable opportunity to
              object to and/or limit the scope of such disclosure.
            </p>
          </div>

          {/* 7. Intellectual Property */}
          <div className={s.legalSection}>
            <h2 className={s.sectionHeading}>7. Intellectual Property.</h2>
            <ul className={s.subList}>
              <li className={s.subItem}>
                <strong>7.1.</strong> Proprietary Rights Notices. Participant shall not remove any
                copyright notice(s), proprietary rights legends, and other indicia of ownership
                included on all tangible materials related to the Devices and Platform to which
                Participant has access.
              </li>
              <li className={s.subItem}>
                <strong>7.2.</strong> VitalFriend Ownership. Participant acknowledges and agrees
                that VitalFriend and its licensors own and will continue to own at all times all
                right, title, and interest in and to the Devices, the Platform, and the VitalFriend
                Materials, and all intellectual property rights in connection with all of the
                foregoing (collectively, the &ldquo;VitalFriend Rights&rdquo;). Except for those
                rights that are expressly granted by VitalFriend to Participant herein,
                (a) VitalFriend reserves all rights in and to the VitalFriend Rights, and
                (b) Participant will not grant, nor claim for itself, either expressly or
                implicitly, any other right, title, interest, or license in or to the VitalFriend
                Rights.
              </li>
              <li className={s.subItem}>
                <strong>7.3.</strong> Documentation License. VitalFriend hereby grants to
                Participant a limited, non-exclusive, revocable, non-transferable (except as
                permitted herein), and non-sublicensable license to use the Documentation solely
                during the Term and solely in connection with its use of the Device and Platform
                as permitted herein.
              </li>
              <li className={s.subItem}>
                <strong>7.4.</strong> Participant Data. As between Participant and VitalFriend,
                Participant owns all right, title and interest (including any intellectual property
                rights) in and to the Participant Data. Participant hereby grants to VitalFriend a
                non-exclusive, worldwide, royalty-free right and license for VitalFriend, its
                employees, and its contractors to collect, use, copy, store, transmit, modify, and
                create derivative works of the Participant Data to the extent necessary to provide
                access to and use of the Platform and Devices and as otherwise set out in this
                Agreement. Notwithstanding anything to the contrary contained herein and during and
                after the Term, VitalFriend, may (a) collect and analyze data relating to
                Participant&apos;s use and the provision and performance of the Devices and Platform
                and related systems and technologies for the purpose of (i) improving or enhancing
                the Devices and Platform and other present and future VitalFriend products and
                services and other development, diagnostic and corrective purposes related thereto
                and (ii) creating aggregated data and other statistics (&ldquo;Aggregate
                Data&rdquo;) and (b) disclosing such Aggregate Data; provided, however, that in no
                event will Aggregate Data identify Participant.
              </li>
              <li className={s.subItem}>
                <strong>7.5.</strong> Feedback. To the extent Participant provides VitalFriend with
                any suggestions, recommendations, or other feedback relating to the VitalFriend
                Materials or to any other VitalFriend products or services (collectively,
                &ldquo;Feedback&rdquo;), VitalFriend may, in its sole discretion, use the Feedback
                and any ideas, know-how, concepts, techniques, and/or other intellectual property
                contained in the Feedback, without providing any attribution or compensation to
                Participant or to any Third Party, for any purpose. Feedback is deemed
                VitalFriend&apos;s Confidential Information. Participant acknowledges and agrees
                that, (a) by acceptance of Participant&apos;s submission of Feedback, VitalFriend
                does not waive any rights to use similar or related ideas previously known to
                VitalFriend, or developed by VitalFriend&apos;s employees, or obtained from sources
                other than Participant; and (b) VitalFriend shall own all intellectual property and
                the intellectual property rights therein in any and all derivative works created by
                or on behalf of VitalFriend related to or arising from the Feedback.
              </li>
              <li className={s.subItem}>
                <strong>7.6.</strong> <strong>Output.</strong>
                <ul className={s.subSubList}>
                  <li className={s.subSubItem}>
                    <strong>7.6.1</strong> The Platform includes features and functionalities
                    supported by artificial intelligence technologies. Subject to Participant&apos;s
                    compliance with the terms of this Agreement, Participant may use the Output for
                    any lawful purpose (except as described below), on a royalty-free basis,
                    provided that Participant acknowledges and agrees that: (a) Participant&apos;s
                    use of the Platform and the Output does not transfer to Participant ownership of
                    any intellectual property rights in the Platform and (b) VitalFriend may, at any
                    time, limit Participant&apos;s use of the Output or require Participant to cease
                    using it (and delete any copies of it) if VitalFriend forms the view, in
                    VitalFriend&apos;s sole and absolute discretion, that Participant&apos;s use of
                    the Output may infringe the rights of any Third Party. Additionally, when the
                    Platform is used to generate Output that directly impacts individuals in
                    high-risk areas, Participant shall ensure that a qualified professional in that
                    field reviews the content and Output prior to finalization of any decisions,
                    medical or otherwise, based on such Output. Participant acknowledges that the
                    Output was AI-generated and Participant shall not use the Output to train
                    Participant&apos;s or any Third Party&apos;s machine learning models.
                  </li>
                  <li className={s.subSubItem}>
                    <strong>7.6.2</strong> DUE TO THE NATURE OF MACHINE LEARNING, THE OUTPUT MAY
                    NOT BE UNIQUE ACROSS USERS AND THE PLATFORM MAY GENERATE THE SAME OR SIMILAR
                    OUTPUT FOR OTHER USERS. USE OF THE PLATFORM MAY RESULT IN INCORRECT OUTPUT THAT
                    DOES NOT ACCURATELY REFLECT REALITY. PARTICIPANT MUST EVALUATE ITSELF OR HAVE
                    EVALUATED THE ACCURACY OF ANY OUTPUT AS APPROPRIATE FOR PARTICIPANT, INCLUDING
                    BY HAVING PARTICIPANT&apos;S MEDICAL PROFESSIONALS REVIEW AND EVALUATE THE
                    OUTPUT. PARTICIPANT ACKNOWLEDGES AND AGREES THAT THE OUTPUT MAY CONTAIN
                    &ldquo;HALLUCINATIONS&rdquo; AND MAY BE INACCURATE, OBJECTIONABLE,
                    INAPPROPRIATE, OR OTHERWISE UNSUITED TO PARTICIPANT&apos;S PURPOSE, AND
                    PARTICIPANT ACKNOWLEDGES AND AGREES THAT VITALFRIEND SHALL NOT BE LIABLE FOR
                    ANY DAMAGES PARTICIPANT ALLEGES TO INCUR AS A RESULT OF OR RELATING TO ANY
                    OUTPUT OR OTHER CONTENT GENERATED BY OR ACCESSED ON OR THROUGH THE PLATFORM.
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          {/* 8. Privacy */}
          <div className={s.legalSection}>
            <h2 className={s.sectionHeading}>8. Privacy.</h2>
            <ul className={s.subList}>
              <li className={s.subItem}>
                <strong>8.1.</strong> Nonpublic Personal Information. In connection with this
                Agreement, Participant may disclose to VitalFriend personally identifiable
                information relating to Participant that is not generally available to the public
                (collectively, &ldquo;Nonpublic Personal Information&rdquo;). The use, storage and
                disclosure of Nonpublic Personal Information is or may be regulated by certain
                Applicable Laws relating to data privacy and security (collectively, the
                &ldquo;Privacy Laws&rdquo;). Each party shall at all times comply with all
                applicable Privacy Laws in connection with its use, storage and disclosure of all
                Nonpublic Personal Information. Except as permitted by applicable Privacy Laws,
                VitalFriend shall not use or disclose any Nonpublic Personal Information for any
                purpose other than as set forth in this Agreement and the Authorization Form.
              </li>
              <li className={s.subItem}>
                <strong>8.2.</strong> Responsibilities for Participant Data. VitalFriend is not
                responsible for the content of any Participant Data or the way Participant chooses
                to use the Platform. VitalFriend does not make any representations as to the
                adequacy of the Platform to process Participant Data or to satisfy any legal or
                compliance requirements which may apply to Participant Data, other than as
                described herein. Any data, documents, or information provided to or maintained by
                VitalFriend in connection with the Platform under this Agreement are for the
                purpose of facilitating provision of the Platform and Devices only. Participant and
                its medical professionals remain responsible for maintaining and preserving their
                own records and for using any and all Participant Data in accordance with
                Applicable Laws and regulations.
              </li>
            </ul>
          </div>

          {/* 9. Term; Termination */}
          <div className={s.legalSection}>
            <h2 className={s.sectionHeading}>9. Term; Termination.</h2>
            <ul className={s.subList}>
              <li className={s.subItem}>
                <strong>9.1.</strong> Term. This Agreement will become effective on the effective
                date of the Authorization Form and shall remain in effect unless and until
                terminated as permitted in this Agreement (the &ldquo;Term&rdquo;).
              </li>
              <li className={s.subItem}>
                <strong>9.2.</strong> <strong>Termination.</strong>
                <ul className={s.subSubList}>
                  <li className={s.subSubItem}>
                    <strong>9.2.1</strong> By VitalFriend. VitalFriend may terminate this Agreement
                    if Participant breaches or defaults in its performance of any material term of
                    this Agreement and, to the extent the breach or default is capable of cure,
                    fails to cure such breach or default within ten (10) days of Participant&apos;s
                    receipt of a written notice identifying the breach or default in reasonable
                    detail.
                  </li>
                  <li className={s.subSubItem}>
                    <strong>9.2.2</strong> By Participant. Participant may terminate this Agreement
                    (a) if VitalFriend breaches or defaults in its performance of any material term
                    of this Agreement and, to the extent the breach or default is capable of cure,
                    fails to cure such breach or default within thirty (30) days of
                    VitalFriend&apos;s receipt of a written notice identifying the breach or default
                    in reasonable detail or (b) upon Participant&apos;s notice to VitalFriend or
                    upon Participant and Provider of the Device determining that use of the Device
                    and access to the Platform is no longer needed. For clarity, Participant may
                    otherwise terminate this Agreement: (1) with respect to remote patient
                    monitoring services at any time in Participant&apos;s discretion; or (2) to the
                    extent Participant otherwise is legally authorized to terminate this Agreement
                    in accordance with Applicable Laws. This Agreement will automatically terminate
                    if Participant ceases to be a patient or customer of Provider.
                  </li>
                  <li className={s.subSubItem}>
                    <strong>9.2.3</strong> Termination of Provider Agreement. This Agreement shall
                    terminate automatically in the event of expiration or termination for any reason
                    of VitalFriend&apos;s agreement with Provider.
                  </li>
                </ul>
              </li>
              <li className={s.subItem}>
                <strong>9.3.</strong> Effects of Termination; Survival. Upon the termination or
                expiration of this Agreement for any reason, in addition to any other obligations
                specified in this Agreement: (a) all rights and licenses granted to Participant by
                VitalFriend hereunder will terminate and no residual rights will remain; (b)(i)
                unless otherwise permitted by VitalFriend in writing, Participant will return the
                Device to VitalFriend and (ii) Participant will stop using the Device and the
                Platform and will destroy all VitalFriend Materials, Documentation, and
                Confidential Information in its possession and control; and (c) Participant will
                not make any use whatsoever of VitalFriend Material or VitalFriend&apos;s
                Confidential Information. Upon expiration or termination of this Agreement, all
                sections of this Agreement that by their nature should survive such expiration or
                termination will so survive.
              </li>
            </ul>
          </div>

          {/* 10. Representations and Warranties */}
          <div className={s.legalSection}>
            <h2 className={s.sectionHeading}>10. Representations and Warranties.</h2>
            <ul className={s.subList}>
              <li className={s.subItem}>
                <strong>10.1.</strong> Participant Representations and Warranties. Participant
                represents and warrants to VitalFriend that it will perform all of its obligations
                under this Agreement, including provision of the Participant Data, in accordance
                with all Applicable Laws.
              </li>
              <li className={s.subItem}>
                <strong>10.2.</strong> <strong>No Professional or Medical Advice.</strong>
                <ul className={s.subSubList}>
                  <li className={s.subSubItem}>
                    <strong>10.2.1</strong> PARTICIPANT ACKNOWLEDGES AND AGREES THAT THE PLATFORM
                    AND DEVICE ARE INTENDED SOLELY FOR ADMINISTRATIVE PURPOSES AND NOT FOR CLINICAL
                    DECISION-MAKING. IF ANY PROFESSIONAL OR MEDICAL INFORMATION IS PROVIDED THROUGH
                    OR IN CONNECTION WITH THE PLATFORM OR DEVICES, SUCH INFORMATION IS FOR
                    INFORMATIONAL PURPOSES ONLY, SHOULD NOT BE CONSTRUED AS PROFESSIONAL OR MEDICAL
                    ADVICE, AND IS NOT A SUBSTITUTE FOR INDIVIDUALIZED PROFESSIONAL OR MEDICAL
                    ADVICE. NEITHER PARTICIPANT NOR ANY OF ITS DESIGNEES SHOULD ACT OR REFRAIN FROM
                    ACTING SOLELY ON THE BASIS OF ANY CONTENT OR OUTPUT THAT IS INCLUDED ON OR
                    GENERATED BY THE PLATFORM OR DEVICES OR THAT IS OTHERWISE OBTAINED IN
                    CONNECTION WITH THE PLATFORM OR DEVICES. USE OF THE PLATFORM AND DEVICES AND
                    CONTENT OR OUTPUT INCLUDED ON OR GENERATED BY THE PLATFORM OR DEVICES SHOULD
                    NOT BE CONSIDERED, AND IS NOT A SUBSTITUTE FOR, MEDICAL ADVICE OR EXPERTISE.
                    THE PROVISION OF THE PLATFORM AND DEVICES, INCLUDING MAINTENANCE AND SUPPORT,
                    DOES NOT CONSTITUTE THE PRACTICE OF ANY MEDICAL, NURSING, OR OTHER PROFESSIONAL
                    HEALTHCARE ADVICE, DIAGNOSIS, OR TREATMENT. VITALFRIEND MAKES NO WARRANTIES AND
                    DISCLAIMS ALL LIABILITIES WITH RESPECT TO, AND IS NOT OTHERWISE RESPONSIBLE FOR,
                    ANY MEDICAL DECISIONS MADE BY PARTICIPANT OR ANY OTHER PARTY WITH RESPECT TO
                    THE PLATFORM AND THE DEVICE AND THE CONTENT OR OUTPUT INCLUDED ON OR GENERATED
                    BY THE PLATFORM OR DEVICES.
                  </li>
                  <li className={s.subSubItem}>
                    <strong>10.2.2</strong> PARTICIPANT FURTHER ACKNOWLEDGES AND AGREES THAT THE
                    PLATFORM UTILIZES ARTIFICIAL INTELLIGENCE AND IS INTENDED TO BE AN ASSISTIVE
                    TOOL FOR QUALIFIED PERSONNEL. ALL OUTPUT FROM OR GENERATED BY THE PLATFORM,
                    INCLUDING INFORMATION CONVEYED TO PARTICIPANT SHOULD BE REVIEWED, APPROVED, AND
                    UPDATED, AS APPLICABLE, BY A QUALIFIED EMPLOYEE, CONTRACTOR, OR AGENT OF
                    PARTICIPANT&apos;S MEDICAL PROFESSIONALS TO WHICH PARTICIPANT PROVIDES COPIES OF
                    OR ACCESS TO ANY SUCH INFORMATION PRIOR TO SUCH CONVEYANCE OR USE. AS BETWEEN
                    THE PARTIES, PARTICIPANT IS SOLELY RESPONSIBLE FOR ALL DECISIONS (INCLUDING
                    MEDICAL DECISIONS) MADE AND ACTIONS TAKEN BASED ON THE USE OF THE PLATFORM AND
                    OUTPUT AND FOR PARTICIPANT&apos;S MEDICAL CARE. VITALFRIEND DISCLAIMS ALL
                    LIABILITY FOR ANY MISUSE OF THE PLATFORM OR OUTPUT BY PARTICIPANT AND
                    PARTICIPANT&apos;S MEDICAL PROVIDERS.
                  </li>
                </ul>
              </li>
              <li className={s.subItem}>
                <strong>10.3.</strong> Disclaimer Regarding Participant Data. PARTICIPANT
                ACKNOWLEDGES AND AGREES THAT THE AMOUNT AND ACCURACY OF PARTICIPANT DATA DEPENDS
                AND IS CONTINGENT UPON PARTICIPANT PROPERLY USING AND MAINTAINING THE DEVICE IN
                ACCORDANCE WITH THE TERMS AND CONDITIONS OF THIS AGREEMENT AND AS SET FORTH IN THE
                AUTHORIZATION FORM. VITALFRIEND MAKES NO REPRESENTATION OR WARRANTY OF ANY KIND,
                EXPRESS OR IMPLIED, ORAL OR WRITTEN, AND HEREBY DISCLAIMS ANY AND ALL SUCH
                WARRANTIES, AS TO THE ACCURACY, COMPLETENESS, LEGALITY, RELIABILITY, OR QUALITY
                OF ANY PARTICIPANT DATA.
              </li>
              <li className={s.subItem}>
                <strong>10.4.</strong> Disclaimer of Other Warranties. EXCEPT AS EXPRESSLY
                PROVIDED IN THIS AGREEMENT, VITALFRIEND MAKES NO REPRESENTATIONS OR WARRANTIES OF
                ANY KIND, EXPRESS OR IMPLIED, ORAL OR WRITTEN, AND HEREBY DISCLAIMS ANY AND ALL
                SUCH WARRANTIES, INCLUDING THE IMPLIED WARRANTIES OF MERCHANTABILITY,
                NONINFRINGEMENT, AND FITNESS FOR A PARTICULAR PURPOSE, WHETHER ALLEGED TO ARISE BY
                LAW, BY USAGE IN THE TRADE, BY COURSE OF DEALING OR PERFORMANCE, OR OTHERWISE.
              </li>
            </ul>
          </div>

          {/* 11. Limitation of Liability */}
          <div className={s.legalSection}>
            <h2 className={s.sectionHeading}>11. Limitation of Liability.</h2>
            <p className={s.bodyText}>
              EXCEPT FOR (A) BODILY INJURY OF A PERSON RESULTING FROM A PARTY&apos;S GROSS
              NEGLIGENCE, (B) A PARTY&apos;S GROSS NEGLIGENCE OR WILLFUL MISCONDUCT, OR
              (C) PARTICIPANT&apos;S INFRINGEMENT, MISAPPROPRIATION, DILUTION, OR OTHER VIOLATION
              OF VITALFRIEND&apos;S INTELLECTUAL PROPERTY RIGHTS, NEITHER PARTY NOR ITS
              RESPECTIVE SUPPLIERS (INCLUDING ALL EQUIPMENT AND TECHNOLOGY SUPPLIERS), OFFICERS,
              AFFILIATES, REPRESENTATIVES, CONTRACTORS AND EMPLOYEES SHALL BE RESPONSIBLE OR
              LIABLE WITH RESPECT TO ANY SUBJECT MATTER OF THIS AGREEMENT OR ANY TERMS AND
              CONDITIONS RELATED THERETO UNDER ANY CONTRACT, NEGLIGENCE, STRICT LIABILITY OR OTHER
              THEORY: (I) FOR ERROR OR INTERRUPTION OF USE OR FOR LOSS OR INACCURACY OR
              CORRUPTION OF DATA OR COST OF PROCUREMENT OF SUBSTITUTE GOODS, SERVICES OR
              TECHNOLOGY OR LOSS OF BUSINESS; (II) FOR ANY INDIRECT, EXEMPLARY, INCIDENTAL,
              SPECIAL OR CONSEQUENTIAL DAMAGES; OR (III) FOR ANY AMOUNTS THAT, TOGETHER WITH
              AMOUNTS ASSOCIATED WITH ALL OTHER CLAIMS, EXCEED THE FEES PAID OR PAYABLE BY
              PARTICIPANT RELATED TO THE DEVICE AND PLATFORM IN THE 12 MONTHS PRIOR TO THE ACT
              THAT GAVE RISE TO THE LIABILITY, IN EACH CASE, WHETHER OR NOT SUCH PARTY HAS BEEN
              ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
            </p>
          </div>

          {/* 12. Miscellaneous */}
          <div className={s.legalSection}>
            <h2 className={s.sectionHeading}>12. Miscellaneous.</h2>
            <p className={s.bodyText}>
              This Agreement constitutes the sole and entire agreement of the parties with respect
              to the subject matter contained herein and therein, and supersedes all prior and
              contemporaneous understandings, agreements, representations, and warranties, both
              written and oral, regarding such subject matter. All notices, requests, consents,
              claims, demands, waivers, and other communications under this Agreement must be in
              writing, including by email. For purposes of this Agreement, the words
              &ldquo;include,&rdquo; &ldquo;includes,&rdquo; and &ldquo;including&rdquo; are
              deemed to be followed by the words &ldquo;without limitation&rdquo;. If any term or
              provision of this Agreement is invalid, illegal, or unenforceable in any
              jurisdiction, such invalidity, illegality, or unenforceability does not affect any
              other term or provision of this Agreement or invalidate or render unenforceable such
              term or provision in any other jurisdiction. VitalFriend may update these Terms and
              Conditions from time to time, as noted in the &ldquo;Last Updated&rdquo; date.
              VitalFriend will notify Participant of material changes to these Terms and
              Conditions, including through a notice made generally available on the Platform;
              Participant&apos;s continued use of the Device and Platform is Participant&apos;s
              acknowledgement of and agreement to be bound by the updated Terms and Conditions.
              Participant&apos;s breach or threatened breach of any of its obligations under
              Section 6, Section 7, Section 8, Section 10 or the terms of the licenses granted to
              it herein would give rise to irreparable harm to VitalFriend for which monetary
              damages would not be an adequate remedy, and in addition to any and all other rights
              and remedies that may be available to VitalFriend at law, at equity, or otherwise in
              respect of this breach, be entitled to seek equitable relief, including a temporary
              restraining order, an injunction, specific performance and any other relief that may
              be available from a court of competent jurisdiction. Participant may not assign any
              of its rights or delegate any of its obligations under this Agreement without the
              prior written consent of VitalFriend. VitalFriend may assign any of its rights or
              delegate any of its obligations without restriction. This Agreement is binding on and
              inures to the benefit of the Parties and their respective permitted successors,
              heirs, and permitted assigns. This Agreement benefits solely the parties to this
              Agreement and their respective permitted successors and permitted assigns and nothing
              in this Agreement, express or implied, confers on any other person any legal or
              equitable right, benefit or remedy of any nature whatsoever under or by reason of
              this Agreement. This Agreement and all matters arising out of or relating to this
              Agreement are governed by, and construed in accordance with, the laws of California,
              without regard to the conflict of laws provisions. Each party irrevocably and
              unconditionally submits to the exclusive jurisdiction of the state and federal courts
              located in San Francisco, California.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
