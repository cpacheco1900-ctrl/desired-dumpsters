import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from './Button';

export const PrivacyPolicy: React.FC = () => {
  const handleGoHome = () => {
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-navy-500 text-white py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={handleGoHome}
            className="flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors mb-6"
          >
            <ArrowLeft size={20} />
            Back to Home
          </button>
          <h1 className="text-4xl md:text-5xl font-bold">Privacy Policy</h1>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
          <div>
            <p className="text-sm text-gray-500 font-semibold mb-4">Last updated: April 27, 2026</p>
            <p className="text-lg leading-relaxed">
              Desired Dumpsters ("we," "us," or "our") is operated by Alexa Garcia Desired, located at 15005 Van Buren, West Olive, MI 49460. This Privacy Policy explains how we collect, use, and protect your information.
            </p>
          </div>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-4">Information We Collect</h2>
            <p className="leading-relaxed">
              We collect your name, phone number, email address, and service address when you contact us through our website or by text message.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-4">How We Use Your Information</h2>
            <p className="leading-relaxed">
              We use your information to respond to rental inquiries, confirm bookings, schedule deliveries, and communicate service updates via SMS or phone call.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-4">SMS Messaging</h2>
            <p className="leading-relaxed">
              By texting 616-314-7778 or submitting our contact form, you consent to receive SMS messages from Desired Dumpsters related to your inquiry. Message and data rates may apply. Reply STOP to unsubscribe. Reply HELP for assistance.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-4">Data Sharing</h2>
            <p className="leading-relaxed">
              We do not sell, rent, or share your personal information with third parties for marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-4">Contact</h2>
            <div className="space-y-2">
              <p className="leading-relaxed">
                <span className="font-semibold">Phone:</span> 616-314-7778
              </p>
              <p className="leading-relaxed">
                <span className="font-semibold">Address:</span> 15005 Van Buren, West Olive, MI 49460
              </p>
            </div>
          </section>

          <div className="pt-8 mt-12 border-t border-gray-200">
            <Button
              variant="primary"
              size="lg"
              onClick={handleGoHome}
              className="w-full sm:w-auto"
            >
              Back to Home
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};
