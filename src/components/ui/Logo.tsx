import React from 'react';
import { Beaker } from 'lucide-react';
import { colors } from '../../utils/colors';

export default function Logo() {
  return (
    <div className="flex items-center">
      <img className={`h-16 w-16`} src="https://res.cloudinary.com/dzyfmxk4c/image/upload/v1734196024/logo_leljky.png" id="logo"></img>
      <span className="ml-2 text-xl font-semibold text-amber-900">Singh Foods</span>
    </div>
  );
}