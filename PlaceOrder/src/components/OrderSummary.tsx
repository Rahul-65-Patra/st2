import React from 'react';

interface SummaryProps {
  totalItems: number;
  totalPrice: number;
  address: string;
  onPlaceOrder: () => void;
  disabled: boolean;
  loading: boolean;
}

const OrderSummary: React.FC<SummaryProps> = ({ totalItems, totalPrice, address, onPlaceOrder, disabled, loading }) => (
  <div className="mt-6 border-t pt-4">
    <h3 className="font-bold">Order Summary</h3>
    <p>Total Items: {totalItems}</p>
    <p>Total Price: ${totalPrice}</p>
    <p>Delivery Address: {address || 'None selected'}</p>
    <button
      className={`mt-4 px-4 py-2 text-white rounded ${disabled ? 'bg-gray-400' : 'bg-green-500'}`}
      onClick={onPlaceOrder}
      disabled={disabled || loading}
    >
      {loading ? 'Placing Order...' : 'Place Order'}
    </button>
  </div>
);

export default OrderSummary;