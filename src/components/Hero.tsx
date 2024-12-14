import React from 'react';
import { colors } from '../utils/colors';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-b from-orange-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:pb-28 lg:w-full">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl tracking-tight font-extrabold text-amber-900 sm:text-5xl md:text-6xl">
                <span className="block">Crafting Perfect</span>
                <span className={`block text-${colors.primary}`}>Mocktail Moments</span>
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-amber-700 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Premium sugar syrups for exceptional non-alcoholic beverages. 
                Elevate your mocktail experience with our artisanal blends.
              </p>
              <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
                <div className="rounded-md shadow">
                  <a 
                    href="#products" 
                    className={`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-${colors.primary} hover:bg-${colors.primaryHover} md:py-4 md:text-lg md:px-10`}
                  >
                    View Products
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}