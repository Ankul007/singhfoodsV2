import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <div id="contact" className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Get in Touch</h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-500">
            Have questions? We'd love to hear from you.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center">
            <Phone className="h-8 w-8 text-emerald-600" />
            <h3 className="mt-4 text-lg font-semibold">Phone</h3>
            <p className="mt-2 text-gray-600">+91-7973880903</p>
          </div>
          <div className="flex flex-col items-center">
            <Mail className="h-8 w-8 text-emerald-600" />
            <h3 className="mt-4 text-lg font-semibold">Email</h3>
            <p className="mt-2 text-gray-600">singhfoodsderabassi@gmail.com</p>
          </div>
          <a href='https://maps.app.goo.gl/qpqJK3KDiLv9yf1z7'>
            <div className="flex flex-col items-center">
              <MapPin className="h-8 w-8 text-emerald-600" />
              <h3 className="mt-4 text-lg font-semibold">Locate us on map</h3>
              <p className="mt-2 text-gray-600">Singh Foods, Village Haripur Hindua Derabassi, Punjab 140507</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}