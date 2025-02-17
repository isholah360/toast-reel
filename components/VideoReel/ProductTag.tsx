'use client';

import { Product } from './types';

interface ProductTagProps {
  product: Product;
}

const ProductTag = ({ product }: ProductTagProps) => (
  <div
    className="absolute transform -translate-x-1/2 -translate-y-1/2 animate-fadeIn"
    style={{ left: `${product.x}%`, top: `${product.y}%` }}
  >
    <div className="bg-white rounded-lg shadow-lg p-2 text-sm">
      <p className="font-medium">{product.name}</p>
      <p className="text-gray-600">{product.price}</p>
    </div>
  </div>
);

export default ProductTag;