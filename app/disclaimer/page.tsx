import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <Header />

      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
        <div className="relative mx-auto max-w-7xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl mb-4 sm:mb-6 font-heading">
            Disclaimer
          </h1>
          <p className="text-lg sm:text-xl text-slate-700 dark:text-gray-300 max-w-3xl mx-auto px-4">
            Important information about the use of our services
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
                  1. General Information
                </h2>
                <p className="text-slate-700 dark:text-gray-300 mb-6">
                  The information provided by Nescomm SMS (&quot;we,&quot;
                  &quot;us,&quot; or &quot;our&quot;) on our platform and
                  related services is for general informational and educational
                  purposes only. All information is provided in good faith;
                  however, we make no representation or warranty of any kind,
                  express or implied, regarding the accuracy, adequacy,
                  validity, reliability, availability, or completeness of any
                  information on the platform.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 font-heading">
                  2. No Professional Advice
                </h2>
                <p className="text-slate-700 dark:text-gray-300 mb-6">
                  The content provided through Nescomm SMS should not be
                  considered as professional educational, legal, financial, or
                  administrative advice. While our platform is designed to
                  assist in school management, it does not replace the need for
                  professional judgment and expertise in educational
                  administration. Users should consult with appropriate
                  professionals for specific advice tailored to their situation.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 font-heading">
                  3. Service Availability and Reliability
                </h2>
                <p className="text-slate-700 dark:text-gray-300 mb-4">
                  While we strive to maintain high service availability:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-gray-300 mb-6 ml-4">
                  <li>
                    We do not guarantee uninterrupted, timely, secure, or
                    error-free service
                  </li>
                  <li>
                    The platform may be unavailable due to maintenance, updates,
                    or technical issues
                  </li>
                  <li>
                    Service availability may be affected by factors beyond our
                    control, including internet connectivity, third-party
                    services, and infrastructure issues
                  </li>
                  <li>
                    We reserve the right to modify, suspend, or discontinue any
                    aspect of the service without prior notice
                  </li>
                </ul>

                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 font-heading">
                  4. Data Accuracy and Completeness
                </h2>
                <p className="text-slate-700 dark:text-gray-300 mb-6">
                  Users are responsible for ensuring the accuracy and
                  completeness of all data entered into the system. While we
                  provide tools for data management and validation, we cannot
                  guarantee the accuracy of user-entered information.
                  Educational institutions should maintain independent records
                  and verification systems for critical data such as academic
                  records, attendance, and financial information.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 font-heading">
                  5. Third-Party Services and Integrations
                </h2>
                <p className="text-slate-700 dark:text-gray-300 mb-6">
                  Our platform may integrate with or link to third-party
                  services, applications, or websites. We are not responsible
                  for the content, privacy policies, or practices of any
                  third-party services. The use of third-party integrations is
                  at your own risk, and we disclaim all liability for any issues
                  arising from such use.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 font-heading">
                  6. Educational Compliance
                </h2>
                <p className="text-slate-700 dark:text-gray-300 mb-6">
                  While our platform is designed to support compliance with
                  educational regulations and standards, it is the
                  responsibility of each institution to ensure compliance with
                  all applicable local, state, and national laws, regulations,
                  and accreditation requirements. We do not guarantee that use
                  of our platform will ensure regulatory compliance.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 font-heading">
                  7. Security and Data Protection
                </h2>
                <p className="text-slate-700 dark:text-gray-300 mb-4">
                  While we implement industry-standard security measures:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-gray-300 mb-6 ml-4">
                  <li>
                    No method of transmission over the internet or electronic
                    storage is 100% secure
                  </li>
                  <li>We cannot guarantee absolute security of your data</li>
                  <li>
                    Users are responsible for maintaining the confidentiality of
                    their account credentials
                  </li>
                  <li>
                    Institutions should implement their own security policies
                    and procedures
                  </li>
                </ul>

                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 font-heading">
                  8. Limitation of Liability
                </h2>
                <p className="text-slate-700 dark:text-gray-300 mb-6">
                  Under no circumstance shall Nescomm SMS or its officers,
                  directors, employees, or agents be liable for any direct,
                  indirect, incidental, special, consequential, or exemplary
                  damages, including but not limited to damages for loss of
                  profits, goodwill, use, data, or other intangible losses
                  resulting from:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-gray-300 mb-6 ml-4">
                  <li>The use or inability to use the service</li>
                  <li>Unauthorized access to or alteration of your data</li>
                  <li>
                    Statements or conduct of any third party on the service
                  </li>
                  <li>Any other matter relating to the service</li>
                </ul>

                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 font-heading">
                  9. Academic and Assessment Decisions
                </h2>
                <p className="text-slate-700 dark:text-gray-300 mb-6">
                  While our platform provides tools for grade management,
                  attendance tracking, and performance analytics, all academic
                  and assessment decisions remain the sole responsibility of the
                  educational institution and its authorized personnel. We do
                  not make or influence academic decisions and are not liable
                  for any consequences of such decisions.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 font-heading">
                  10. Financial Transactions
                </h2>
                <p className="text-slate-700 dark:text-gray-300 mb-6">
                  Our fee management and payment processing features are
                  provided as tools to facilitate financial transactions.
                  Institutions are responsible for ensuring the accuracy of all
                  financial records, complying with accounting standards, and
                  maintaining appropriate financial controls. We are not liable
                  for any financial losses or discrepancies arising from the use
                  of our platform.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 font-heading">
                  11. Communication Services
                </h2>
                <p className="text-slate-700 dark:text-gray-300 mb-6">
                  Our platform provides communication tools for schools,
                  parents, and students. We are not responsible for the content
                  of communications sent through our platform. Users are
                  responsible for ensuring that their communications comply with
                  applicable laws and institutional policies. We do not
                  guarantee delivery of messages and are not liable for failed
                  or delayed communications.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 font-heading">
                  12. Backup and Data Recovery
                </h2>
                <p className="text-slate-700 dark:text-gray-300 mb-6">
                  While we maintain regular backups of data, institutions are
                  strongly encouraged to maintain their own independent backup
                  systems for critical data. We do not guarantee the ability to
                  recover all data in the event of system failure, data
                  corruption, or other unforeseen circumstances.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 font-heading">
                  13. System Requirements and Compatibility
                </h2>
                <p className="text-slate-700 dark:text-gray-300 mb-6">
                  We strive to maintain compatibility with current browsers and
                  devices, but we do not guarantee functionality on all systems,
                  browsers, or devices. Users are responsible for ensuring their
                  systems meet the minimum requirements for using our platform
                  effectively.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 font-heading">
                  14. Updates and Modifications
                </h2>
                <p className="text-slate-700 dark:text-gray-300 mb-6">
                  We reserve the right to modify, update, or discontinue any
                  feature or aspect of the service at any time without prior
                  notice. We are not liable for any modifications, suspensions,
                  or discontinuations of the service or any feature thereof.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 font-heading">
                  15. User-Generated Content
                </h2>
                <p className="text-slate-700 dark:text-gray-300 mb-6">
                  Users may upload various types of content to our platform,
                  including documents, images, and other files. We are not
                  responsible for the content uploaded by users and do not
                  endorse any user-generated content. Users are solely
                  responsible for ensuring they have the right to upload and
                  share such content.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 font-heading">
                  16. Medical and Health Information
                </h2>
                <p className="text-slate-700 dark:text-gray-300 mb-6">
                  While our platform may allow storage of student medical
                  information for administrative purposes, this information is
                  for record-keeping only and should not be used as a substitute
                  for professional medical advice, diagnosis, or treatment.
                  Always seek the advice of qualified health providers with
                  questions regarding medical conditions.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 font-heading">
                  17. Disclaimer Updates
                </h2>
                <p className="text-slate-700 dark:text-gray-300 mb-6">
                  We may update this disclaimer from time to time to reflect
                  changes in our services or legal requirements. The updated
                  version will be indicated by an updated &quot;Last
                  Updated&quot; date. Continued use of our service after any
                  changes constitutes acceptance of the updated disclaimer.
                </p>

                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 font-heading">
                  18. Contact Information
                </h2>
                <p className="text-slate-700 dark:text-gray-300 mb-4">
                  If you have any questions or concerns about this Disclaimer,
                  please contact us:
                </p>
                <ul className="list-none space-y-2 text-slate-700 dark:text-gray-300 mb-6">
                  <li>
                    <strong>Email:</strong> legal@schoolerp.com
                  </li>
                  <li>
                    <strong>Phone:</strong> +91 7355957231
                  </li>
                  <li>
                    <strong>Address:</strong> HSR Layout, Sector 2,
                    Bengaluru-560102, India
                  </li>
                </ul>

                <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-600 p-4 mt-8">
                  <p className="text-sm text-slate-700 dark:text-gray-300">
                    <strong>Important Notice:</strong> By using Nescomm SMS, you
                    acknowledge that you have read, understood, and agree to be
                    bound by this Disclaimer. If you do not agree with any part
                    of this disclaimer, you should not use our service.
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
