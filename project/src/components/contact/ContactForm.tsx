import React, { useState } from 'react';
import { Mail, Phone, Send } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically integrate with your email service
    // For now, we'll just log the data
    console.log('Form submitted:', formData);
    
    // Create mailto link with form data
    const mailtoLink = `mailto:info@exactmontage.nl?subject=Nieuwe aanvraag van ${formData.name}&body=Naam: ${formData.name}%0D%0ATelefoon: ${formData.phone}%0D%0AEmail: ${formData.email}%0D%0A%0D%0ABericht:%0D%0A${formData.message}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-off-white mb-2">Naam</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg bg-background/40 border border-primary-green/20 text-off-white focus:border-primary-green focus:ring-2 focus:ring-primary-green/20 transition-all"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-off-white mb-2">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg bg-background/40 border border-primary-green/20 text-off-white focus:border-primary-green focus:ring-2 focus:ring-primary-green/20 transition-all"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-off-white mb-2">Telefoon</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg bg-background/40 border border-primary-green/20 text-off-white focus:border-primary-green focus:ring-2 focus:ring-primary-green/20 transition-all"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-off-white mb-2">Bericht</label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg bg-background/40 border border-primary-green/20 text-off-white focus:border-primary-green focus:ring-2 focus:ring-primary-green/20 transition-all resize-none"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-primary-green text-dark-green py-4 rounded-lg font-semibold hover:bg-secondary-green transition-all transform hover:scale-105 flex items-center justify-center"
      >
        <Send className="w-5 h-5 mr-2" />
        Verstuur bericht
      </button>
    </form>
  );
}