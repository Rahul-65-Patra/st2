import React from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface Props {
  cart: Product[];
  onRemove: (id: number) => void;
  onQuantityChange: (id: number, quantity: number) => void;
}

const Cart: React.FC<Props> = ({ cart, onRemove, onQuantityChange }) => {
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center mb-2"
            >
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p>${item.price} x </p>
                <input
                  type="number"
                  value={item.quantity}
                  min={1}
                  className="border w-16 text-center mx-2"
                  onChange={(e) =>
                    onQuantityChange(item.id, parseInt(e.target.value))
                  }
                />
              </div>
              <button
                className="bg-red-500 text-white px-2 py-1 rounded"
                onClick={() => onRemove(item.id)}
              >
                Remove
              </button>
            </div>
          ))}
          <h3 className="text-xl font-bold mt-4">Total: ${total}</h3>
        </div>
      )}
    </div>
  );
};

export default Cart;
