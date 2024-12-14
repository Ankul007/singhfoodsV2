import React from 'react';
import { Phone } from 'lucide-react';
import { colors } from '../../utils/colors';

export default function ContactInfo() {
  return (
    <div className="hidden md:flex items-center">
      <Phone className={`h-5 w-5 text-${colors.primary}`} />
      <span className="ml-2 text-amber-700">+91-7973880903</span>
    </div>
  );
}