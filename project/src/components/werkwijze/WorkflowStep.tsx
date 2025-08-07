import React from 'react';
import { LucideIcon } from 'lucide-react';

interface WorkflowStepProps {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  isLast?: boolean;
}

export default function WorkflowStep({ number, title, description, icon: Icon, isLast = false }: WorkflowStepProps) {
  return (
    <div className="relative">
      <div className="flex items-start gap-6">
        <div className="relative">
          <div className="flex-shrink-0 w-16 h-16 bg-primary-green text-dark-green rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
            {number}
          </div>
          <div className="absolute -right-1 -bottom-1 w-8 h-8 bg-background/40 backdrop-blur-sm rounded-full flex items-center justify-center border border-primary-green/20">
            <Icon className="w-4 h-4 text-primary-green" />
          </div>
        </div>
        <div className="pt-2">
          <h2 className="text-2xl font-bold text-primary-green mb-3">{title}</h2>
          <p className="text-off-white/80 text-lg">{description}</p>
        </div>
      </div>
      {!isLast && (
        <div className="absolute left-8 top-16 w-0.5 h-16 bg-gradient-to-b from-primary-green/50 to-transparent" />
      )}
    </div>
  );
}