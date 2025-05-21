import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ProductList from "./pages/ProductList";
import Cart from "./pages/Cart";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
}

interface CartItem extends Product {
  quantity: number;
}

const App: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const handleAddToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const handleRemoveFromCart = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const handleQuantityChange = (id: number, quantity: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: quantity > 0 ? quantity : 1 }
          : item
      )
    );
  };

  return (
    <Router>
      <nav className="bg-gray-500 text-white p-4 flex justify-between">
        <Link to="/" className="font-bold bg-orange-400 px-3 py-1 rounded">
          Shop
        </Link>
        <Link to="/cart" className="bg-blue-500 px-3 py-1 rounded">
          Cart ({cart.reduce((acc, item) => acc + item.quantity, 0)})
        </Link>
      </nav>
      <Routes>
        <Route
          path="/"
          element={<ProductList onAddToCart={handleAddToCart} />}
        />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              onRemove={handleRemoveFromCart}
              onQuantityChange={handleQuantityChange}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
