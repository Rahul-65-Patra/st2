import { useEffect } from "react";
import { useState } from "react";

const Card = () => {
  const [card, setCard] = useState([]);

  useEffect(() => {
    fetch("/Products.json")
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        setCard(response);
        console.log(response);
      });
  }, []);

  return (
    <>
      <div className="max-w-6xl mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {card.map((product, index) => (
            <div key={index} className="border rounded-lg shadow-md p-4">
              <img
                src={product.Image}
                alt={product.name}
                className="w-full h-40 object-contain mb-4"
              />
              <h2 className="text-lg font-semibold text-gray-800">
                {product.name}
              </h2>
              <p className="text-sm text-gray-500 mb-2">
                Outdoor Modular Lounge 
              </p>
              <p className="text-red-600 font-bold text-md">
                ${product.price.toFixed(2)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Card;
