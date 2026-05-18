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

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [smsConsent, setSmsConsent] = useState(false);
  const [smsConfirmed, setSmsConfirmed] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSmsConsent = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    setSmsConsent(checked);
    setSmsConfirmed(checked);
  };

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
          sms_consent: smsConsent ? 'Yes - opted in' : 'No',
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', phone: '', email: '', service: 'dumpster-rental', message: '' });
        setSmsConsent(false);
        setSmsConfirmed(false);
      } else {
        setError('Something went wrong. Please try again or call us directly.');
      }
    } catch {
      setError('Something went wrong. Please try again or call us directly.');
    }
    setSubmitting(false);
  };

  return (
    <Section id="contact" className="bg-gray-900">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-4">Get a Free Quote</h2>
        <p className="text-gray-400">Ready to get started? Contact us today for a free quote on dumpster rental services.</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <Card className="p-8">
          {submitted ? (
            <div className="text-center py-8">
              <div className="text-green-400 text-5xl mb-4">✓</div>
              <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
              <p className="text-gray-400">We'll be in touch shortly to confirm your details.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-orange-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(616) 123-4567"
                  className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-orange-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-orange-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Service Type</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-orange-500"
                >
                  <option value="dumpster-rental">Dumpster Rental</option>
                  <option value="junk-removal">Junk Removal</option>
                  <option value="cleanout">Cleanout Service</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-orange-500"
                />
              </div>
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="smsConsent"
                  checked={smsConsent}
                  onChange={handleSmsConsent}
                  className="mt-1 h-4 w-4 accent-orange-500 cursor-pointer"
                />
                <label htmlFor="smsConsent" className="text-xs text-gray-400 cursor-pointer">
                  (Optional) I would like to receive SMS messages from Desired Dumpsters regarding my inquiry, booking confirmation, and scheduling. Message frequency varies up to 5 messages per month. Message and data rates may apply. Reply STOP to opt out or HELP for help. View our{' '}
                  <a href="/privacy-policy" className="text-orange-400 underline">Privacy Policy</a>{' '}
                  and{' '}
                  <a href="/terms-and-conditions" className="text-orange-400 underline">Terms &amp; Conditions</a>.
                </label>
              </div>
              {smsConfirmed && (
                <p className="text-green-400 text-xs font-medium">
                  ✓ You have opted in to receive SMS messages from Desired Dumpsters. Reply STOP at any time to unsubscribe.
                </p>
              )}
              {error && <p className="text-red-400 text-sm">{error}</p>}
              <Button type="submit" disabled={submitting} className="w-full">
                {submitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          )}
        </Card>
        <div className="space-y-6">
          <Card className="p-6">
            <h3 className="text-lg font-bold text-white mb-4">Get In Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="text-orange-500 w-5 h-5" />
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <a href="tel:6163147778" className="text-orange-400 font-semibold">(616) 314-7778</a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="text-orange-500 w-5 h-5" />
                <div>
                  <p className="text-sm text-gray-400">Service Hours</p>
                  <p className="text-white">Monday - Saturday</p>
                  <p className="text-white">7:00 AM - 7:00 PM</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-orange-500 w-5 h-5" />
                <div>
                  <p className="text-sm text-gray-400">Service Area</p>
                  <p className="text-white">Greater Grand Rapids &amp; West Michigan</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-orange-500 w-5 h-5" />
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <a href="mailto:info@desireddumpsters.com" className="text-orange-400">info@desireddumpsters.com</a>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Section>
  );
};
