import React from 'react';

interface CartItemProps {
  id: number;
  name: string;
  price: number;
  isSelected: boolean;
  onToggle: (id: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({ id, name, price, isSelected, onToggle }) => (
  <div className="flex items-center justify-between border p-2">
    <div>
      <input
        type="checkbox"
        checked={isSelected}
        onChange={() => onToggle(id)}
        className="mr-2"
      />
      <span>{name}</span>
    </div>
    <span>${price}</span>
  </div>
);

export default CartItem;