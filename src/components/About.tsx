import React from 'react';
import { LeafyGreen, Award, Recycle } from 'lucide-react';

export default function About() {
  return (
    <div id="about" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Our Vision</h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-500">
          We are a leading manufacturer in Moctails, Jams, Pickles, Herbal Juices

Our vision at Singh foods is to embody global wellness through selfless care, innovation, culture and growth guided by an unwavering commitment to significantly improve the lives of patients. We base our Innovation on bold leadership in science and medicine resulting in the discovery, development and delivery of high-quality, differentiated products focused on patient needs. Our age-old culture is based on good corporate citizenship that empowers our employees through collaboration, inclusion, trust and timely decision making.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <div className="text-center">
            <div className="flex justify-center">
              <LeafyGreen className="h-12 w-12 text-emerald-600" />
            </div>
            <h3 className="mt-4 text-lg font-semibold">Natural Ingredients</h3>
            <p className="mt-2 text-gray-600">100% natural, locally sourced ingredients</p>
          </div>
          <div className="text-center">
            <div className="flex justify-center">
              <Award className="h-12 w-12 text-emerald-600" />
            </div>
            <h3 className="mt-4 text-lg font-semibold">Quality Assured</h3>
            <p className="mt-2 text-gray-600">Rigorous quality control standards</p>
          </div>
          <div className="text-center">
            <div className="flex justify-center">
              <Recycle className="h-12 w-12 text-emerald-600" />
            </div>
            <h3 className="mt-4 text-lg font-semibold">Sustainable Packaging</h3>
            <p className="mt-2 text-gray-600">Eco-friendly packaging solutions</p>
          </div>
        </div>
      </div>
    </div>
  );
}