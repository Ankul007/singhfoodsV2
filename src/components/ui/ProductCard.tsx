import React, { useState } from 'react';
import type { Product } from '../../data/products';
import ProductModal from './ProductModal';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div 
        className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <img className="h-48 w-full object-cover" src={product.image} alt={product.name} />
        <div className="p-6">
          <div className="flex justify-between items-start">
            <h3 className="text-lg font-semibold text-amber-900">{product.name}</h3>
            <span className="text-amber-600 font-bold">${product.price}</span>
          </div>
          <p className="mt-2 text-amber-700">{product.description}</p>
          <div className="mt-4 flex justify-between items-center">
            <span className="text-sm text-amber-600">{product.volume}</span>
            <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">
              {product.category}
            </span>
          </div>
        </div>
      </div>

      <ProductModal 
        product={product}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}