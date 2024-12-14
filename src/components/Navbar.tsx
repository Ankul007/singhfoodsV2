import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './ui/Logo';
import NavLinks from './ui/NavLinks';
import ContactInfo from './ui/ContactInfo';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Logo />
          
          {/* Desktop Navigation */}
          <NavLinks />
          <ContactInfo />

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-amber-700 hover:text-amber-600 hover:bg-amber-50"
          >
            {isMenuOpen ? (
              <X className="block h-6 w-6" />
            ) : (
              <Menu className="block h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } md:hidden bg-white border-t border-amber-100`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          <NavLinks isMobile onItemClick={closeMenu} />
          <div className="py-3 text-center text-amber-700 border-t border-amber-100">
            <p>Call us: +91-7973880903</p>
          </div>
        </div>
      </div>
    </nav>
  );
}