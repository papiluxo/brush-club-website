import { Button } from "@/components/ui/Button";
import { COMPANY_INFO } from "@/lib/constants";
import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Privacy Policy
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
          <p className="text-sm text-slate-500 mt-4">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            
            {/* Introduction */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900">Introduction</h2>
              <p className="text-slate-600 leading-relaxed">
                {COMPANY_INFO.name} ("we," "our," or "us") is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                when you visit our website or make a purchase from us.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900">Information We Collect</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Personal Information</h3>
                  <p className="text-slate-600 leading-relaxed mb-3">
                    We may collect personal information that you voluntarily provide to us when you:
                  </p>
                  <ul className="list-disc list-inside text-slate-600 space-y-1">
                    <li>Make a purchase or place an order</li>
                    <li>Create an account on our website</li>
                    <li>Subscribe to our newsletter</li>
                    <li>Contact us with questions or feedback</li>
                    <li>Participate in surveys or promotions</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Automatically Collected Information</h3>
                  <p className="text-slate-600 leading-relaxed">
                    When you visit our website, we may automatically collect certain information about your device, 
                    including information about your web browser, IP address, time zone, and some of the cookies 
                    that are installed on your device.
                  </p>
                </div>
              </div>
            </div>

            {/* How We Use Your Information */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900">How We Use Your Information</h2>
              <p className="text-slate-600 leading-relaxed mb-3">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-1">
                <li>Process and fulfill your orders</li>
                <li>Communicate with you about your orders and account</li>
                <li>Provide customer support</li>
                <li>Send you marketing communications (with your consent)</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            {/* Information Sharing */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900">Information Sharing</h2>
              <p className="text-slate-600 leading-relaxed">
                We do not sell, trade, or otherwise transfer your personal information to third parties without 
                your consent, except as described in this policy. We may share your information with:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-1 mt-3">
                <li>Service providers who assist us in operating our website and conducting our business</li>
                <li>Payment processors to handle transactions</li>
                <li>Shipping companies to deliver your orders</li>
                <li>Legal authorities when required by law</li>
              </ul>
            </div>

            {/* Cookies and Tracking */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900">Cookies and Tracking Technologies</h2>
              <p className="text-slate-600 leading-relaxed">
                We use cookies and similar tracking technologies to enhance your experience on our website. 
                Cookies help us remember your preferences, understand how you use our site, and improve our services. 
                You can control cookie settings through your browser preferences.
              </p>
            </div>

            {/* Data Security */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900">Data Security</h2>
              <p className="text-slate-600 leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal 
                information against unauthorized access, alteration, disclosure, or destruction. However, no method 
                of transmission over the internet or electronic storage is 100% secure.
              </p>
            </div>

            {/* Your Rights */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900">Your Rights</h2>
              <p className="text-slate-600 leading-relaxed mb-3">
                Depending on your location, you may have the following rights regarding your personal information:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-1">
                <li>Access to your personal information</li>
                <li>Correction of inaccurate information</li>
                <li>Deletion of your personal information</li>
                <li>Objection to processing of your information</li>
                <li>Data portability</li>
                <li>Withdrawal of consent</li>
              </ul>
            </div>

            {/* Third-Party Links */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900">Third-Party Links</h2>
              <p className="text-slate-600 leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the privacy 
                practices or content of these external sites. We encourage you to review the privacy policies 
                of any third-party sites you visit.
              </p>
            </div>

            {/* Children's Privacy */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900">Children's Privacy</h2>
              <p className="text-slate-600 leading-relaxed">
                Our services are not intended for children under the age of 13. We do not knowingly collect 
                personal information from children under 13. If we become aware that we have collected personal 
                information from a child under 13, we will take steps to delete such information.
              </p>
            </div>

            {/* Changes to This Policy */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900">Changes to This Privacy Policy</h2>
              <p className="text-slate-600 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting 
                the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review 
                this Privacy Policy periodically.
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900">Contact Us</h2>
              <p className="text-slate-600 leading-relaxed">
                If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
              </p>
              <div className="bg-slate-50 rounded-lg p-6 mt-4">
                <p className="text-slate-700">
                  <strong>Email:</strong> {COMPANY_INFO.email}
                </p>
                <p className="text-slate-700 mt-2">
                  <strong>Company:</strong> {COMPANY_INFO.name}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Questions About Our Privacy Policy?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We're committed to transparency and protecting your privacy. If you have any questions or concerns, 
            we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/faq">
              <Button variant="primary" size="lg">
                View FAQ
              </Button>
            </Link>
            <Link href="/">
              <Button variant="outline" size="lg">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 