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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const mailtoLink = `mailto:info@desireddumpsters.com?subject=Service Inquiry&body=Name: ${formData.name}%0DPhone: ${formData.phone}%0DEmail: ${formData.email}%0DService: ${formData.service}%0D%0DMessage:%0D${formData.message}`;
    window.location.href = mailtoLink;
  };

  return (
    <Section id="contact" bgColor="light">
      <div className="space-y-12">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">Contact Us</h2>
          <p className="text-lg text-gray-600">Get in touch with our friendly team</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card shadow="lg">
            <form onSubmit={handleSubmit} className="p-8 space-y-6">
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
                  <option value="junk-removal">Junk Removal & Cleanout</option>
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

              <Button variant="primary" size="lg" className="w-full" type="submit">
                Send Message
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
                    <p className="text-gray-600">25+ West Michigan Cities</p>
                    <p className="text-gray-600">Including Grand Rapids, Holland & Beyond</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card shadow="sm" className="p-8 bg-green-50 border-2 border-green-200">
              <p className="text-sm text-gray-600">
                <span className="font-bold">Pro Tip:</span> For fastest response, call us directly. We're happy to answer questions and provide free estimates over the phone.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </Section>
  );
};
