import React from 'react';
import { colors } from '../../utils/colors';

interface NavLinksProps {
  isMobile?: boolean;
  onItemClick?: () => void;
}

export default function NavLinks({ isMobile, onItemClick }: NavLinksProps) {
  const links = [
    { href: '#products', label: 'Products' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ];

  const baseStyles = isMobile
    ? 'block w-full py-3 text-center'
    : '';

  return (
    <div className={`${isMobile ? 'flex flex-col' : 'hidden md:flex md:space-x-8'}`}>
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          onClick={onItemClick}
          className={`${baseStyles} text-amber-700 hover:text-${colors.primary}`}
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}