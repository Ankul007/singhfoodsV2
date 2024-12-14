import React, { useState } from 'react';
import { products } from '../data/products';
import ProductCard from './ui/ProductCard';
import Pagination from './ui/Pagination';

const ITEMS_PER_PAGE = 9;

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  // Calculate pagination
  const indexOfLastProduct = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstProduct = indexOfLastProduct - ITEMS_PER_PAGE;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  // Reset to first page when category changes
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  return (
    <div id="products" className="bg-orange-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-amber-900">Our Premium Products</h2>
          <p className="mt-4 max-w-2xl mx-auto text-amber-700">
            Carefully crafted flavors that transform ordinary moments into extraordinary experiences
          </p>
        </div>
        
        {/* Scrollable categories container */}
        <div className="mt-8 relative">
          <div className="flex overflow-x-auto pb-4 hide-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
            <div className="flex space-x-4 min-w-max mx-auto">
              <button 
                onClick={() => handleCategoryChange('all')}
                className={`px-6 py-2 rounded-full whitespace-nowrap ${
                  selectedCategory === 'all' 
                    ? 'bg-amber-600 text-white' 
                    : 'bg-white text-amber-600 hover:bg-amber-50'
                }`}
              >
                All
              </button>
              {['premium syrup', 'seasonal syrup', 'jams', 'chocolate syrup', 'fruit juices', 'pickles'].map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-6 py-2 rounded-full whitespace-nowrap capitalize ${
                    selectedCategory === category 
                      ? 'bg-amber-600 text-white' 
                      : 'bg-white text-amber-600 hover:bg-amber-50'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Product grid with improved responsive layout */}
        <div className="mt-12 grid grid-cols-1 gap-y-8 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {currentProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-12">
          <Pagination
            totalItems={filteredProducts.length}
            itemsPerPage={ITEMS_PER_PAGE}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
}