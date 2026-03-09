import React from 'react';

export function ThankYou() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
            <svg
              className="w-12 h-12 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-3">Booking Confirmed</h1>
        <p className="text-lg text-gray-600 mb-6">
          Thank you for choosing Desired Dumpsters! We'll be in touch shortly to confirm your
          delivery details.
        </p>
        <p className="text-gray-700 mb-8">
          Questions? Call us at{' '}
          <a href="tel:6163147778" className="font-semibold text-green-600 hover:underline">
            (616) 314-7778
          </a>
        </p>
        <a
          href="/"
          className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
}
