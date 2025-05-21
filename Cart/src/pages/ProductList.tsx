import React from "react";
import ProductCard from "../components/ProductCard";
import products from "../products";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
}

interface Props {
  onAddToCart: (product: Product) => void;
}

const ProductList: React.FC<Props> = ({ onAddToCart }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
    {products.map((product) => (
      <ProductCard
        key={product.id}
        product={product}
        onAddToCart={onAddToCart}
      />
    ))}
  </div>
);

export default ProductList;
