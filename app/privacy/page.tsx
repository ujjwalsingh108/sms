import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <Header />

      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
        <div className="relative mx-auto max-w-7xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl mb-4 sm:mb-6 font-heading">
            Privacy Policy
          </h1>
          <p className="text-lg sm:text-xl text-slate-700 dark:text-gray-300 max-w-3xl mx-auto px-4">
            Your privacy is important to us. Learn how we protect your data.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Card className="bg-white dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 shadow-sm">
            <CardContent className="p-6 sm:p-8 md:p-12">
              <div className="prose prose-slate dark:prose-invert max-w-none">
                <p className="text-sm text-slate-600 dark:text-gray-400 mb-8">
                  Last Updated: November 16, 2025
                </p>

                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 font-heading">
                  1. Introduction
                </h2>
                <p className="text-slate-700 dark:text-gray-300 mb-6">
                  Nescomm SMS (&quot;we,&quot; &quot;our,&quot; or
                  &quot;us&quot;) is committed to protecting your privacy. This
                  Privacy Policy explains how we collect, use, disclose, and
                  safeguard your information when you use our School Management
                  System platform. Please read this policy carefully.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 font-heading">
                  2. Information We Collect
                </h2>

                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                  2.1 Personal Information
                </h3>
                <p className="text-slate-700 dark:text-gray-300 mb-4">
                  We collect personal information that you provide directly to
                  us, including:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-gray-300 mb-6 ml-4">
                  <li>
                    Student information (name, date of birth, contact details,
                    academic records)
                  </li>
                  <li>
                    Parent/guardian information (name, contact details,
                    relationship to student)
                  </li>
                  <li>
                    Staff information (name, qualifications, contact details,
                    employment records)
                  </li>
                  <li>Account credentials (username, email, password)</li>
                  <li>
                    Payment information (billing details, transaction history)
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                  2.2 Automatically Collected Information
                </h3>
                <p className="text-slate-700 dark:text-gray-300 mb-4">
                  When you use our service, we automatically collect:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-gray-300 mb-6 ml-4">
                  <li>
                    Log data (IP address, browser type, pages visited, time
                    spent)
                  </li>
                  <li>
                    Device information (device type, operating system, unique
                    identifiers)
                  </li>
                  <li>
                    Usage data (features used, actions taken, preferences)
                  </li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>

                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 font-heading">
                  3. How We Use Your Information
                </h2>
                <p className="text-slate-700 dark:text-gray-300 mb-4">
                  We use the collected information for various purposes:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-gray-300 mb-6 ml-4">
                  <li>
                    Providing and maintaining our school management services
                  </li>
                  <li>Processing student admissions and academic records</li>
                  <li>Managing attendance, grades, and performance tracking</li>
                  <li>
                    Facilitating communication between school, students, and
                    parents
                  </li>
                  <li>Processing fee payments and financial transactions</li>
                  <li>Sending important notifications and updates</li>
                  <li>Improving our services and developing new features</li>
                  <li>Ensuring security and preventing fraud</li>
                  <li>Complying with legal obligations</li>
                  <li>Providing customer support</li>
                </ul>

                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 font-heading">
                  4. Data Sharing and Disclosure
                </h2>
                <p className="text-slate-700 dark:text-gray-300 mb-4">
                  We may share your information in the following circumstances:
                </p>

                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                  4.1 Within Your Institution
                </h3>
                <p className="text-slate-700 dark:text-gray-300 mb-6">
                  Information is shared with authorized staff members, teachers,
                  and administrators within your institution as necessary for
                  educational purposes.
                </p>

                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                  4.2 Service Providers
                </h3>
                <p className="text-slate-700 dark:text-gray-300 mb-6">
                  We may share information with third-party service providers
                  who perform services on our behalf, such as hosting, data
                  analysis, payment processing, and customer service. These
                  providers are bound by confidentiality agreements.
                </p>

                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                  4.3 Legal Requirements
                </h3>
                <p className="text-slate-700 dark:text-gray-300 mb-6">
                  We may disclose information if required by law, court order,
                  or governmental request, or to protect our rights, property,
                  or safety.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 font-heading">
                  5. Data Security
                </h2>
                <p className="text-slate-700 dark:text-gray-300 mb-4">
                  We implement industry-standard security measures to protect
                  your data:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-gray-300 mb-6 ml-4">
                  <li>256-bit SSL/TLS encryption for data in transit</li>
                  <li>AES-256 encryption for data at rest</li>
                  <li>Regular security audits and penetration testing</li>
                  <li>Multi-factor authentication options</li>
                  <li>Role-based access controls</li>
                  <li>Regular data backups and disaster recovery procedures</li>
                  <li>Employee training on data protection</li>
                </ul>

                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 font-heading">
                  6. Data Retention
                </h2>
                <p className="text-slate-700 dark:text-gray-300 mb-6">
                  We retain your personal information for as long as necessary
                  to provide our services and comply with legal obligations.
                  Student records may be retained for a minimum period as
                  required by educational regulations. You may request deletion
                  of your data, subject to our legal and contractual
                  obligations.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 font-heading">
                  7. Your Rights and Choices
                </h2>
                <p className="text-slate-700 dark:text-gray-300 mb-4">
                  You have the following rights regarding your personal
                  information:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-gray-300 mb-6 ml-4">
                  <li>
                    <strong>Access:</strong> Request a copy of your personal
                    data
                  </li>
                  <li>
                    <strong>Correction:</strong> Request correction of
                    inaccurate or incomplete data
                  </li>
                  <li>
                    <strong>Deletion:</strong> Request deletion of your data
                    (subject to legal requirements)
                  </li>
                  <li>
                    <strong>Portability:</strong> Request transfer of your data
                    to another service
                  </li>
                  <li>
                    <strong>Restriction:</strong> Request restriction of
                    processing in certain circumstances
                  </li>
                  <li>
                    <strong>Objection:</strong> Object to processing of your
                    data for certain purposes
                  </li>
                  <li>
                    <strong>Opt-out:</strong> Unsubscribe from marketing
                    communications
                  </li>
                </ul>

                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 font-heading">
                  8. Children&apos;s Privacy
                </h2>
                <p className="text-slate-700 dark:text-gray-300 mb-6">
                  Our service is designed for educational institutions and
                  involves processing data of minors. We comply with applicable
                  children&apos;s privacy laws, including obtaining necessary
                  parental consent. Parents and guardians have the right to
                  review, modify, or delete their child&apos;s personal
                  information.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 font-heading">
                  9. Cookies and Tracking Technologies
                </h2>
                <p className="text-slate-700 dark:text-gray-300 mb-6">
                  We use cookies and similar technologies to enhance user
                  experience, analyze usage patterns, and provide personalized
                  content. You can control cookie preferences through your
                  browser settings, though disabling cookies may limit certain
                  functionality.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 font-heading">
                  10. International Data Transfers
                </h2>
                <p className="text-slate-700 dark:text-gray-300 mb-6">
                  Your data is primarily stored and processed in India. If data
                  is transferred internationally, we ensure appropriate
                  safeguards are in place to protect your information in
                  accordance with applicable data protection laws.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 font-heading">
                  11. Third-Party Links
                </h2>
                <p className="text-slate-700 dark:text-gray-300 mb-6">
                  Our service may contain links to third-party websites or
                  services. We are not responsible for the privacy practices of
                  these third parties. We encourage you to review their privacy
                  policies.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 font-heading">
                  12. Changes to This Privacy Policy
                </h2>
                <p className="text-slate-700 dark:text-gray-300 mb-6">
                  We may update this Privacy Policy from time to time. We will
                  notify you of any material changes by posting the new policy
                  on this page and updating the &quot;Last Updated&quot; date.
                  Continued use of our service after changes constitutes
                  acceptance of the updated policy.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 font-heading">
                  13. Contact Us
                </h2>
                <p className="text-slate-700 dark:text-gray-300 mb-4">
                  If you have questions or concerns about this Privacy Policy or
                  our data practices, please contact us:
                </p>
                <ul className="list-none space-y-2 text-slate-700 dark:text-gray-300 mb-6">
                  <li>
                    <strong>Email:</strong> privacy@schoolerp.com
                  </li>
                  <li>
                    <strong>Phone:</strong> +91 7355957231
                  </li>
                  <li>
                    <strong>Address:</strong> HSR Layout, Sector 2,
                    Bengaluru-560102, India
                  </li>
                </ul>

                <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 p-4 mt-8">
                  <p className="text-sm text-slate-700 dark:text-gray-300">
                    <strong>Data Protection Officer:</strong> For specific data
                    protection inquiries, you can reach our Data Protection
                    Officer at dpo@schoolerp.com
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}
