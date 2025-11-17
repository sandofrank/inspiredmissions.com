import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Our privacy policy and data protection commitments.",
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "Privacy Policy",
    description: "Our privacy policy and data protection commitments.",
  },
}

export default function PrivacyPolicyPage() {
  return (
    <div>
      {/* Hero Banner */}
      <div className="hero-section hero-section-small">
        <Image
          src="/images/hero-angkor-wat.jpg"
          alt="Angkor Wat Cambodia"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover' }}
        />
        <div className="hero-overlay hero-overlay-strong"></div>
        <div className="hero-content">
          <h1 className="hero-title">
            Privacy Policy
          </h1>
          <p className="hero-subtitle">
            Your privacy is important to us
          </p>
        </div>
      </div>

      <div className="page-container">
        <section className="content-section">
          <div className="prose section-content">
          <p className="text-sm text-gray-600 mb-8">
            <strong>Last Updated:</strong> January 15, 2025
          </p>

          <section className="mb-8">
            <h2>Introduction</h2>
            <p>
              Inspired Missions ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website inspiredmissions.com and any related services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
            </p>
          </section>

          <section className="mb-8">
            <h2>Information We Collect</h2>

            <h3>Information You Provide to Us</h3>
            <p>
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul>
              <li>Register for email newsletters or updates</li>
              <li>Make a donation through our site</li>
              <li>Contact us via email or contact forms</li>
              <li>Participate in surveys or provide feedback</li>
            </ul>
            <p>
              This information may include:
            </p>
            <ul>
              <li>Name and contact information (email address, phone number, mailing address)</li>
              <li>Payment information (processed securely through third-party payment processors)</li>
              <li>Communication preferences</li>
              <li>Any other information you choose to provide</li>
            </ul>

            <h3>Automatically Collected Information</h3>
            <p>
              When you visit our website, we may automatically collect certain information about your device and usage, including:
            </p>
            <ul>
              <li>IP address and general location information</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referring website addresses</li>
              <li>Date and time of visits</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2>Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to enhance your experience on our website. Cookies are small text files stored on your device that help us:
            </p>
            <ul>
              <li>Recognize your browser and remember your preferences</li>
              <li>Understand how you use our website</li>
              <li>Improve website functionality and user experience</li>
              <li>Analyze website traffic and trends</li>
            </ul>
            <p>
              You can control cookie preferences through your browser settings. Please note that disabling cookies may affect the functionality of certain features on our website.
            </p>
          </section>

          <section className="mb-8">
            <h2>How We Use Your Information</h2>
            <p>
              We use the information we collect for the following purposes:
            </p>
            <ul>
              <li><strong>Communication:</strong> To send you newsletters, updates about our mission work, and respond to your inquiries</li>
              <li><strong>Donations:</strong> To process and acknowledge donations</li>
              <li><strong>Website Improvement:</strong> To analyze usage patterns and improve our website content and functionality</li>
              <li><strong>Legal Compliance:</strong> To comply with legal obligations and protect our rights</li>
              <li><strong>Security:</strong> To detect, prevent, and address technical issues and fraudulent activity</li>
              <li><strong>Mission Updates:</strong> To keep supporters informed about our work in Cambodia</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2>How We Share Your Information</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
            </p>
            <ul>
              <li><strong>Service Providers:</strong> With trusted third-party service providers who assist us in operating our website, processing donations (such as payment processors), or sending communications (such as email service providers). These providers are contractually obligated to keep your information confidential and secure.</li>
              <li><strong>Legal Requirements:</strong> When required by law, subpoena, or other legal process, or when we believe in good faith that disclosure is necessary to protect our rights, your safety, or the safety of others.</li>
              <li><strong>Business Transfers:</strong> In connection with any merger, sale of organizational assets, financing, or acquisition of all or a portion of our organization to another entity.</li>
              <li><strong>With Your Consent:</strong> When you have given us explicit permission to share your information.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2>Data Security</h2>
            <p>
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
            </p>
            <ul>
              <li>Encryption of data in transit using SSL/TLS technology</li>
              <li>Secure storage of sensitive information</li>
              <li>Limited access to personal information on a need-to-know basis</li>
              <li>Regular security assessments and updates</li>
            </ul>
            <p>
              However, please be aware that no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security. If we become aware of a data breach, we will notify affected individuals in accordance with applicable laws.
            </p>
          </section>

          <section className="mb-8">
            <h2>Data Retention</h2>
            <p>
              We retain your personal information only for as long as necessary to fulfill the purposes outlined in this privacy policy, unless a longer retention period is required or permitted by law. When we no longer need your information, we will securely delete or anonymize it.
            </p>
            <p>
              Specific retention periods include:
            </p>
            <ul>
              <li><strong>Donation Records:</strong> Retained for tax and accounting purposes as required by law (typically 7 years)</li>
              <li><strong>Email Subscribers:</strong> Until you unsubscribe or request deletion</li>
              <li><strong>Contact Form Inquiries:</strong> Retained for a reasonable period to respond to your inquiry and maintain records</li>
              <li><strong>Website Analytics:</strong> Aggregated and anonymized data may be retained indefinitely for statistical purposes</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2>Your Privacy Rights</h2>
            <p>
              Depending on your location, you may have the following rights regarding your personal information:
            </p>
            <ul>
              <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal retention requirements)</li>
              <li><strong>Objection:</strong> Object to processing of your personal information for certain purposes</li>
              <li><strong>Data Portability:</strong> Request transfer of your information to another service provider</li>
              <li><strong>Withdraw Consent:</strong> Withdraw consent for processing where we rely on consent as legal basis</li>
              <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications at any time</li>
            </ul>
            <p>
              To exercise any of these rights, please contact us at <a href="mailto:info@inspiredmissions.com">info@inspiredmissions.com</a>. We will respond to your request within 30 days.
            </p>
          </section>

          <section className="mb-8">
            <h2>Third-Party Services</h2>
            <p>
              Our website may contain links to third-party websites and services, including:
            </p>
            <ul>
              <li><strong>Donation Platform:</strong> Donorbox (for processing donations)</li>
              <li><strong>Social Media:</strong> Facebook, Instagram (for sharing our mission updates)</li>
              <li><strong>Email Services:</strong> For delivering newsletters and communications</li>
            </ul>
            <p>
              These third-party services have their own privacy policies. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing any personal information.
            </p>
          </section>

          <section className="mb-8">
            <h2>Children's Privacy</h2>
            <p>
              Our website is not directed to children under the age of 13, and we do not knowingly collect personal information from children under 13. If we become aware that we have inadvertently collected personal information from a child under 13, we will take steps to delete such information as quickly as possible.
            </p>
            <p>
              If you are a parent or guardian and believe that your child has provided us with personal information, please contact us at <a href="mailto:info@inspiredmissions.com">info@inspiredmissions.com</a>.
            </p>
          </section>

          <section className="mb-8">
            <h2>International Data Transfers</h2>
            <p>
              Inspired Missions is based in the United States, and our missionaries serve in Cambodia. Your information may be transferred to and processed in the United States or other countries where our service providers operate. These countries may have different data protection laws than your country of residence.
            </p>
            <p>
              By using our website and providing your information, you consent to such transfers. We will take appropriate steps to ensure that your personal information receives an adequate level of protection wherever it is processed.
            </p>
          </section>

          <section className="mb-8">
            <h2>California Privacy Rights (CCPA)</h2>
            <p>
              If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA):
            </p>
            <ul>
              <li>Right to know what personal information we collect, use, and disclose</li>
              <li>Right to request deletion of your personal information</li>
              <li>Right to opt-out of the sale of personal information (we do not sell personal information)</li>
              <li>Right to non-discrimination for exercising your privacy rights</li>
            </ul>
            <p>
              To exercise these rights, please contact us at <a href="mailto:info@inspiredmissions.com">info@inspiredmissions.com</a>.
            </p>
          </section>

          <section className="mb-8">
            <h2>European Privacy Rights (GDPR)</h2>
            <p>
              If you are located in the European Economic Area (EEA), you have rights under the General Data Protection Regulation (GDPR), including:
            </p>
            <ul>
              <li>Right of access to your personal data</li>
              <li>Right to rectification of inaccurate data</li>
              <li>Right to erasure ("right to be forgotten")</li>
              <li>Right to restrict processing</li>
              <li>Right to data portability</li>
              <li>Right to object to processing</li>
              <li>Rights related to automated decision-making and profiling</li>
            </ul>
            <p>
              Our legal basis for processing your information includes: consent, contractual necessity, legal obligations, and legitimate interests in operating our ministry and communicating with supporters.
            </p>
          </section>

          <section className="mb-8">
            <h2>Email Communications</h2>
            <p>
              If you subscribe to our newsletter or email updates, we will send you periodic communications about our mission work in Cambodia, ministry updates, and opportunities to support our work. You can unsubscribe at any time by:
            </p>
            <ul>
              <li>Clicking the "unsubscribe" link at the bottom of any email</li>
              <li>Contacting us at <a href="mailto:info@inspiredmissions.com">info@inspiredmissions.com</a></li>
            </ul>
            <p>
              Please note that even if you unsubscribe from marketing emails, we may still send you administrative emails related to donations or direct inquiries.
            </p>
          </section>

          <section className="mb-8">
            <h2>Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of any material changes by:
            </p>
            <ul>
              <li>Posting the updated policy on this page with a new "Last Updated" date</li>
              <li>Sending an email notification to registered users (for significant changes)</li>
            </ul>
            <p>
              We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information.
            </p>
          </section>

          <section className="mb-8">
            <h2>Contact Us</h2>
            <p>
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-left-primary-color">
              <p className="mb-2"><strong>Inspired Missions</strong></p>
              <p className="mb-2">
                Mailing Address:<br />
                35962 Butchart St<br />
                Wildomar, CA 92584<br />
                United States
              </p>
              <p className="mb-2">
                Email: <a href="mailto:info@inspiredmissions.com" className="font-semibold hover:opacity-80 transition-opacity text-primary-blue">info@inspiredmissions.com</a>
              </p>
              <p className="mb-2">
                USA Team Contact:<br />
                Jeff Johnson: <a href="mailto:jjohnson@inspiredmissions.com" className="font-semibold hover:opacity-80 transition-opacity text-primary-blue">jjohnson@inspiredmissions.com</a><br />
                Phone: 951-704-4853
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2>Compliance and Governance</h2>
            <p>
              Inspired Missions operates as a 501(c)(3) non-profit organization (Tax ID: 81-3757343) and is committed to maintaining the highest standards of privacy protection and data security. We comply with all applicable federal and state laws regarding data privacy and protection.
            </p>
            <p>
              Our ministers operate in Cambodia under the NGO Water of Life Cambodia, and we adhere to both U.S. and Cambodian laws regarding data privacy and protection.
            </p>
          </section>

          <div className="mt-8 pt-6 border-t border-gray-200 text-center">
            <Link href="/" className="btn-primary inline-block">
              Return to Home
            </Link>
          </div>
          </div>
        </section>
      </div>
    </div>
  )
}
