import React, { useState } from 'react';
import type { Product } from '../../data/products';
import Modal from './Modal';
import { ZoomIn, ZoomOut } from 'lucide-react';

interface ProductModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  const [isZoomed, setIsZoomed] = useState(true);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col md:flex-row">
        <div className="relative md:w-1/2">
          <img 
            src={product.image} 
            alt={product.name}
            className={`w-full ${isZoomed ? 'h-auto max-h-[80vh]' : 'h-[400px]'} 
              ${isZoomed ? 'object-contain' : 'object-cover'}
              rounded-t-lg md:rounded-l-lg md:rounded-t-none
              transition-all duration-300`}
          />
          <button
            onClick={() => setIsZoomed(!isZoomed)}
            className="absolute bottom-4 right-4 p-2 bg-white rounded-full shadow-lg
              hover:bg-gray-100 transition-colors"
          >
            {isZoomed ? (
              <ZoomOut className="h-5 w-5 text-gray-600" />
            ) : (
              <ZoomIn className="h-5 w-5 text-gray-600" />
            )}
          </button>
        </div>
        <div className="p-6 md:w-1/2">
          <div className="mb-4">
            <div className="flex justify-between items-start">
              <h2 className="text-2xl font-bold text-amber-900">{product.name}</h2>
              <span className="text-xl font-bold text-amber-600">${product.price}</span>
            </div>
            <span className="inline-block mt-2 px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">
              {product.category}
            </span>
          </div>
          
          <p className="text-amber-700 text-lg mb-4">{product.description}</p>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between border-t border-gray-200 pt-4">
              <span className="text-gray-600">Volume</span>
              <span className="font-medium text-amber-900">{product.volume}</span>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}