import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import WorkflowStep from '../components/werkwijze/WorkflowStep';
import { PhoneCall, ClipboardList, FileSpreadsheet, Phone, Wrench } from 'lucide-react';

const steps = [
  {
    number: "1",
    title: "KENNISMAKING",
    description: "U neemt contact met ons op via telefoon of website.",
    icon: PhoneCall
  },
  {
    number: "2",
    title: "WENSENLIJST",
    description: "We maken een afspraak bij u thuis geheel kosteloos natuurlijk. Hier bespreken we uw wensen.",
    icon: ClipboardList
  },
  {
    number: "3",
    title: "OFFERTE",
    description: "Nadat u mij verteld heeft wat ik voor u kan betekenen krijgt u een vrijblijvende offerte.",
    icon: FileSpreadsheet
  },
  {
    number: "4",
    title: "NA BELLEN OFFERTE",
    description: "Na aanleiding van de offerte horen we graag of u nog vragen heeft.",
    icon: Phone
  },
  {
    number: "5",
    title: "AAN HET WERK",
    description: "Alle vragen beantwoord? Offerte naar u zin, dan zullen we deze in samen inplannen.",
    icon: Wrench
  }
];

export default function WerkwijzePage() {
  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-primary-green mb-6">
              Hoe gaan we te werk?
            </h1>
            <p className="text-xl text-off-white/90">
              Vertel wat u wilt, het wordt geregeld.
            </p>
          </div>
        </AnimatedSection>

        <div className="space-y-12">
          {steps.map((step, index) => (
            <AnimatedSection key={index} delay={index * 100}>
              <WorkflowStep
                number={step.number}
                title={step.title}
                description={step.description}
                icon={step.icon}
                isLast={index === steps.length - 1}
              />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={600}>
          <div className="mt-16 text-center">
            <a 
              href="/contact"
              className="inline-block bg-primary-green text-dark-green px-8 py-4 rounded-lg font-semibold hover:bg-secondary-green transition-all transform hover:scale-105 shadow-lg"
            >
              Neem contact op
            </a>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}