import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from './Button';

export const TermsAndConditions: React.FC = () => {
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
          <h1 className="text-4xl md:text-5xl font-bold">Terms and Conditions</h1>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
          <div>
            <p className="text-sm text-gray-500 font-semibold mb-4">Last updated: May 7, 2026</p>
          </div>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-4">SMS Program</h2>
            <p className="leading-relaxed">
              Desired Dumpsters operates the &quot;Desired Dumpsters SMS Alerts&quot; program to send booking confirmations,
              delivery scheduling updates, and general customer support messages. You can opt in by submitting the
              contact or booking form at desireddumpsters.com (by checking the SMS consent checkbox, which is unchecked
              by default and requires active selection) or by texting (616) 314-7778 directly. Message frequency varies.
              Message and data rates may apply. No mobile information will be shared with third parties or affiliates
              for marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-4">Opt-Out</h2>
            <p className="leading-relaxed">
              Reply <strong>STOP</strong> to unsubscribe at any time. Reply <strong>HELP</strong> for assistance or
              call (616) 314-7778. All opt-out requests are honored immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-4">Service Terms</h2>
            <p className="leading-relaxed">
              Rentals are subject to availability. Pricing is confirmed at booking. We reserve the right to modify pricing and availability without notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-4">Limitation of Liability</h2>
            <p className="leading-relaxed">
              Desired Dumpsters is not liable for damages from misuse of rented equipment or improper placement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-4">Contact</h2>
            <div className="space-y-2">
              <p className="leading-relaxed">
                <span className="font-semibold">Alexa Garcia Desired</span>
              </p>
              <p className="leading-relaxed">
                15005 Van Buren, West Olive, MI 49460
              </p>
              <p className="leading-relaxed">
                <span className="font-semibold">Phone:</span> (616) 314-7778
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
