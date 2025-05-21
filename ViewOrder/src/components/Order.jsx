import { useEffect } from "react";
import { useState } from "react";

const Order = () => {
  const [orders, setOrderes] = useState([]);

  useEffect(() => {
    fetch("/orders.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setOrderes(data);
      });
  }, []);

  return (
    <>
      <div className="max-w-4xl mx-auto p-4 space-y-6">
        {orders.map((order, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row justify-between items-center border rounded-lg shadow-sm p-4"
          >
            <img
              src={order.Image}
              alt={order.name}
              className="w-24 h-24 object-contain mb-4 md:mb-0"
            />

            <div className="flex-1 grid grid-cols-2 md:grid-cols-5 gap-4 text-sm text-gray-700 ml-5">
              <div>
                <p className="font-semibold">Order Number</p>
                <p>{order.ordernumber}</p>
              </div>
              <div>
                <p className="font-semibold">Purchased</p>
                <p>{order.purchasedon}</p>
              </div>
              <div>
                <p className="font-semibold">Quantity</p>
                <p>x{order.quantity}</p>
              </div>
              <div>
                <p className="font-semibold">Total</p>
                <p>${order.total}</p>
              </div>
              <div>
                <p className="font-semibold">Status</p>
                <p
                  className={`font-medium ${
                    order.status.toLowerCase() === "delivered"
                      ? "text-green-600"
                      : "text-red-500"
                  }`}
                >
                  {order.status}
                </p>
              </div>
            </div>

            <button className="mt-4 md:mt-0 md:ml-4 px-4 py-2 border border-red-500 text-red-500 rounded hover:bg-red-50 text-sm">
              View Order
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Order;
