import React from 'react';
import { CheckCircle, XCircle, Leaf } from 'lucide-react';
import { Section } from './Section';
import { Card } from './Card';

export const WhatWeAccept: React.FC = () => {
  const acceptedItems = [
    '🛏️ Mattresses & Box Springs — most places won\'t take them, we do!',
    '🛋️ Couches & Large Upholstered Furniture — most places won\'t take them, we do!',
    'Household junk and clutter',
    'Furniture',
    'Construction debris',
    'Wood',
    'Drywall',
    'Roofing materials',
    'Yard waste',
    'Leaves',
    'Brush',
    'Tree branches and limbs',
  ];

  const notAcceptedItems = [
    'Tires',
    'Refrigerants and appliances containing Freon (refrigerators, freezers, AC units)',
    'Hazardous materials and chemicals',
    'Paint (latex or oil based)',
    'Gas cans and propane tanks',
    'Asbestos',
    'Medical waste and biohazardous materials',
  ];

  return (
    <Section id="accept" bgColor="light">
      <div className="space-y-12">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">What We Accept</h2>
          <p className="text-lg text-gray-600">Know exactly what can go in your dumpster</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card shadow="lg" className="hover:shadow-card-lg transition-shadow animate-fade-in">
            <div className="p-8 space-y-6">
              <div className="flex items-center gap-3">
                <div className="bg-green-100 p-3 rounded-lg">
                  <CheckCircle className="text-green-600" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-navy-900">Accepted Items</h3>
              </div>

              <ul className="space-y-3">
                {acceptedItems.map((item, index) => (
                  <li
                    key={item}
                    className={`flex items-start gap-3 ${index < 2 ? 'bg-green-50 border border-green-200 rounded-lg px-3 py-2' : ''}`}
                  >
                    <span className="text-green-600 flex-shrink-0 mt-1">✓</span>
                    <span className={`${index < 2 ? 'text-green-800 font-semibold' : 'text-gray-700'}`}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>

          <Card shadow="lg" className="hover:shadow-card-lg transition-shadow animate-fade-in" style={{ animationDelay: '200m
