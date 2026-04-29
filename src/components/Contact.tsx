import React, { useState } from 'react';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';
import { Section } from './Section';
import { Button } from './Button';
import { Card } from './Card';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'dumpster-rental',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '0f7f907a-6a99-4bb5-a565-f75a904e1122',
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          service: formData.service,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        setFormData({
          name: '',
          phone: '',
          email: '',
          service: 'dumpster-rental',
          message: '',
        });
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Section id="contact" className="bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">Get a Free Quote</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Ready to get started? Contact us today for a free quote on dumpster rental services.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Card shadow="lg">
          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            {submitted && (
              <div className="bg-green-50 border border-green-300 text-green-800 rounded-lg p-4 font-semibold text-center">
                Message sent! We'll be in touch soon.
              </div>
            )}
            {error && (
              <div className="bg-red-50 border border-red-300 text-red-700 rounded-lg p-4 text-center">
                {error}
              </div>
            )}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                placeholder="(616) 123-4567"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Service Type</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
              >
                <option value="dumpster-rental">Dumpster Rental</option>
                <option value="junk-removal">Junk Removal &amp; Cleanout</option>
                <option value="both">Both Services</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all resize-none"
                placeholder="Tell us about your project..."
              />
            </div>

            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                id="smsConsent"
                required
                className="mt-1 accent-orange-500"
              />
              <label htmlFor="smsConsent" className="text-xs text-gray-500 leading-snug">
                By submitting this form, you agree to receive SMS messages from Desired Dumpsters
                regarding your inquiry, booking confirmation, and scheduling. Message frequency varies.
                Message and data rates may apply. Reply STOP to opt out or HELP for help. View our{' '}
                <a href="/privacy-policy" className="underline text-orange-500">Privacy Policy</a>{' '}
                and{' '}
                <a href="/terms-and-conditions" className="underline text-orange-500">Terms &amp; Conditions</a>.
              </label>
            </div>

            <Button variant="primary" size="lg" className="w-full" type="submit" disabled={submitting}>
              {submitting ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
        </Card>

        <div className="space-y-6">
          <Card shadow="lg" className="p-8">
            <h3 className="text-2xl font-bold text-navy-900 mb-6">Get In Touch</h3>

            <div className="space-y-6">
              <div className="flex gap-4">
                <Phone className="text-orange-500 flex-shrink-0 mt-1" size={24} />
                <div>
                  <p className="font-semibold text-navy-900">Phone</p>
                  <a href="tel:+16163147778" className="text-orange-500 hover:text-orange-600 font-bold text-lg">
                    (616) 314-7778
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock className="text-orange-500 flex-shrink-0 mt-1" size={24} />
                <div>
                  <p className="font-semibold text-navy-900">Service Hours</p>
                  <p className="text-gray-600">Monday - Saturday</p>
                  <p className="text-gray-600">7:00 AM - 7:00 PM</p>
                </div>
              </div>

              <div className="flex gap-4">
                <MapPin className="text-orange-500 flex-shrink-0 mt-1" size={24} />
                <div>
                  <p className="font-semibold text-navy-900">Service Area</p>
                  <p className="text-gray-600">Greater Grand Rapids &amp; West Michigan</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail className="text-orange-500 flex-shrink-0 mt-1" size={24} />
                <div>
                  <p className="font-semibold text-navy-900">Email</p>
                  <a href="mailto:info@desireddumpsters.com" className="text-orange-500 hover:text-orange-600">
                    info@desireddumpsters.com
                  </a>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Section>
  );
};
