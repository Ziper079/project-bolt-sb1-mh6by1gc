import React from 'react';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';
import AnimatedSection from '../components/AnimatedSection';

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4">
        <AnimatedSection>
          <h1 className="text-4xl font-bold text-primary-green mb-12">Contact</h1>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <AnimatedSection delay={200}>
            <div className="bg-background/40 backdrop-blur-md p-8 rounded-xl border border-primary-green/20">
              <ContactForm />
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={400}>
            <div className="bg-background/40 backdrop-blur-md p-8 rounded-xl border border-primary-green/20">
              <ContactInfo />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}