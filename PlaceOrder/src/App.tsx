import React, { useState } from "react";
import CartItem from "./components/CartItem";
import AddressSelector from "./components/AddressSelector";
import OrderSummary from "./components/OrderSummary";
import { cartItems as initialCartItems } from "./data/cartItems";
import { addresses } from "./data/addresses";
import "./styles.css";

interface CartItemType {
  id: number;
  name: string;
  price: number;
}

const App: React.FC = () => {
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [selectedAddress, setSelectedAddress] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const toggleItem = (id: number) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleAddressSelect = (address: string) => setSelectedAddress(address);

  const selectedProducts = initialCartItems.filter((item) =>
    selectedItems.includes(item.id)
  );
  const totalPrice = selectedProducts.reduce(
    (sum, item) => sum + item.price,
    0
  );

  const placeOrder = () => {
    setLoading(true);
    setTimeout(() => {
      alert(
        `Order placed for ${selectedProducts.length} items to: ${selectedAddress}`
      );
      setSelectedItems([]);
      setSelectedAddress("");
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">QuickCart - Place Your Order</h1>

      <div className="space-y-2">
        {initialCartItems.map((item) => (
          <CartItem
            key={item.id}
            {...item}
            isSelected={selectedItems.includes(item.id)}
            onToggle={toggleItem}
          />
        ))}
      </div>

      <AddressSelector
        addresses={addresses}
        selected={selectedAddress}
        onSelect={handleAddressSelect}
      />

      <OrderSummary
        totalItems={selectedItems.length}
        totalPrice={totalPrice}
        address={selectedAddress}
        onPlaceOrder={placeOrder}
        disabled={selectedItems.length === 0 || !selectedAddress}
        loading={loading}
      />
    </div>
  );
};

export default App;
