import React, { useEffect, useState } from "react";


type Product = {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
};

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("electronics");
    if (saved) {
      setProducts(JSON.parse(saved));
    } else {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data: Product[]) => {
          const electronics = data.filter((p) => p.category === "electronics");
          setProducts(electronics);
          localStorage.setItem("electronics", JSON.stringify(electronics));
        })
        .catch((err) => console.error("Fetch error:", err));
    }
  }, []);

  const handleRemove = (id: number) => {
    const updated = products.filter((p) => p.id !== id);
    setProducts(updated);
    localStorage.setItem("electronics", JSON.stringify(updated));
  };

  return (
    <>
      <div className="max-w-4xl mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Electronics Products</h2>
        <ul className="space-y-4">
          {products.map((product) => (
            <li
              key={product.id}
              className="flex items-center border rounded p-4 shadow-sm"
            >
              <img
                src={product.image}
                alt={product.title}
                className="h-20 w-20 object-contain mr-6"
              />
              <div className="flex-grow">
                <h4 className="font-semibold text-lg">{product.title}</h4>
                <p className="text-gray-700">Price: ${product.price}</p>
              </div>
              <button
                onClick={() => handleRemove(product.id)}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-right font-medium">
          Total Products Displayed:{" "}
          <span className="text-blue-600">{products.length}</span>
        </p>
      </div>
    </>
  );
};

export default ProductList;
