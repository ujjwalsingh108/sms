import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 via-white to-gray-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <Header />

      {/* Hero Section */}
      <section className="relative py-24 px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-blue-600/20 to-purple-600/20" />
        <div className="relative mx-auto max-w-7xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-6xl mb-6">
            Terms and Conditions
          </h1>
          <p className="text-xl text-slate-700 dark:text-gray-300 max-w-3xl mx-auto">
            Please read these terms carefully before using our services
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Card className="bg-white dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 shadow-sm">
            <CardContent className="p-8 md:p-12">
              <div className="prose prose-slate dark:prose-invert max-w-none">
                <p className="text-sm text-slate-600 dark:text-gray-400 mb-8">
                  Last Updated: November 16, 2025
                </p>

                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 font-heading">
                  1. Acceptance of Terms
                </h2>
                <p className="text-slate-700 dark:text-gray-300 mb-6">
                  By accessing and using Nescomm SMS (School Management System),
                  you accept and agree to be bound by the terms and provision of
                  this agreement. If you do not agree to abide by the above,
                  please do not use this service.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 font-heading">
                  2. Use License
                </h2>
                <p className="text-slate-700 dark:text-gray-300 mb-4">
                  Permission is granted to temporarily access and use Nescomm
                  SMS for educational and administrative purposes. This is the
                  grant of a license, not a transfer of title, and under this
                  license you may not:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-gray-300 mb-6 ml-4">
                  <li>Modify or copy the materials</li>
                  <li>
                    Use the materials for any commercial purpose without
                    authorization
                  </li>
                  <li>
                    Attempt to reverse engineer any software contained in
                    Nescomm SMS
                  </li>
                  <li>
                    Remove any copyright or other proprietary notations from the
                    materials
                  </li>
                  <li>
                    Transfer the materials to another person or
                    &quot;mirror&quot; the materials on any other server
                  </li>
                </ul>

                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 font-heading">
                  3. Service Description
                </h2>
                <p className="text-slate-700 dark:text-gray-300 mb-6">
                  Nescomm SMS provides a comprehensive school management
                  platform including student information management, attendance
                  tracking, grade management, fee collection, and communication
                  tools. We reserve the right to modify, suspend, or discontinue
                  any aspect of the service at any time.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 font-heading">
                  4. User Accounts and Responsibilities
                </h2>
                <p className="text-slate-700 dark:text-gray-300 mb-4">
                  You are responsible for:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-gray-300 mb-6 ml-4">
                  <li>
                    Maintaining the confidentiality of your account credentials
                  </li>
                  <li>All activities that occur under your account</li>
                  <li>Ensuring the accuracy of information provided</li>
                  <li>
                    Notifying us immediately of any unauthorized use of your
                    account
                  </li>
                  <li>Complying with all applicable laws and regulations</li>
                </ul>

                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 font-heading">
                  5. Data Protection and Privacy
                </h2>
                <p className="text-slate-700 dark:text-gray-300 mb-6">
                  We are committed to protecting your data and privacy. All
                  student and institutional data is encrypted and stored
                  securely. Please refer to our Privacy Policy for detailed
                  information about how we collect, use, and protect your data.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 font-heading">
                  6. Payment Terms
                </h2>
                <p className="text-slate-700 dark:text-gray-300 mb-6">
                  Subscription fees are billed in advance on a monthly or annual
                  basis. All fees are non-refundable except as required by law.
                  We reserve the right to change our pricing with 30 days notice
                  to existing customers.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 font-heading">
                  7. Intellectual Property Rights
                </h2>
                <p className="text-slate-700 dark:text-gray-300 mb-6">
                  All content, features, and functionality of Nescomm SMS,
                  including but not limited to text, graphics, logos, icons,
                  images, audio clips, and software, are the exclusive property
                  of Nescomm and are protected by copyright, trademark, and
                  other intellectual property laws.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 font-heading">
                  8. Prohibited Activities
                </h2>
                <p className="text-slate-700 dark:text-gray-300 mb-4">
                  You agree not to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-gray-300 mb-6 ml-4">
                  <li>Use the service for any illegal purpose</li>
                  <li>
                    Attempt to gain unauthorized access to any portion of the
                    service
                  </li>
                  <li>Interfere with or disrupt the service or servers</li>
                  <li>Upload viruses or malicious code</li>
                  <li>Harass, abuse, or harm other users</li>
                  <li>
                    Collect or store personal data about other users without
                    consent
                  </li>
                </ul>

                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 font-heading">
                  9. Service Availability
                </h2>
                <p className="text-slate-700 dark:text-gray-300 mb-6">
                  While we strive for 99.9% uptime, we do not guarantee
                  uninterrupted access to the service. The service may be
                  temporarily unavailable for maintenance, upgrades, or due to
                  circumstances beyond our control.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 font-heading">
                  10. Limitation of Liability
                </h2>
                <p className="text-slate-700 dark:text-gray-300 mb-6">
                  Nescomm SMS shall not be liable for any indirect, incidental,
                  special, consequential, or punitive damages resulting from
                  your use or inability to use the service. Our total liability
                  shall not exceed the amount paid by you in the 12 months
                  preceding the claim.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 font-heading">
                  11. Termination
                </h2>
                <p className="text-slate-700 dark:text-gray-300 mb-6">
                  We reserve the right to terminate or suspend your account and
                  access to the service immediately, without prior notice, for
                  conduct that we believe violates these Terms or is harmful to
                  other users, us, or third parties, or for any other reason.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 font-heading">
                  12. Governing Law
                </h2>
                <p className="text-slate-700 dark:text-gray-300 mb-6">
                  These terms shall be governed by and construed in accordance
                  with the laws of India. Any disputes arising from these terms
                  or use of the service shall be subject to the exclusive
                  jurisdiction of the courts in Bengaluru, Karnataka.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 font-heading">
                  13. Changes to Terms
                </h2>
                <p className="text-slate-700 dark:text-gray-300 mb-6">
                  We reserve the right to modify these terms at any time. We
                  will notify users of any material changes via email or through
                  the service. Continued use of the service after changes
                  constitutes acceptance of the modified terms.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 font-heading">
                  14. Contact Information
                </h2>
                <p className="text-slate-700 dark:text-gray-300 mb-2">
                  If you have any questions about these Terms and Conditions,
                  please contact us:
                </p>
                <ul className="list-none space-y-2 text-slate-700 dark:text-gray-300 mb-6">
                  <li>Email: info@schoolerp.com</li>
                  <li>Phone: +91 7355957231</li>
                  <li>
                    Address: HSR Layout, Sector 2, Bengaluru-560102, India
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}
