import React from "react";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
}

interface Props {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<Props> = ({ product, onAddToCart }) => (
  <div className="border rounded p-4 shadow-md">
    <h2 className="text-xl font-bold">{product.name}</h2>
    <p>{product.description}</p>
    <p className="font-semibold">${product.price}</p>
    <button
      className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
      onClick={() => onAddToCart(product)}
    >
      Add to Cart
    </button>
  </div>
);

export default ProductCard;
