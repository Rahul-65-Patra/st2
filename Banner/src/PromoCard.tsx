import React from "react";
import { Link } from "react-router-dom";

type PromoCardProps = {
  image: string;
  bgcolor: string;
  bannertext1: string;
  bannertext2: string;
  bannertext3: string;
  linkurl: string;
};

const PromoCard: React.FC<PromoCardProps> = ({
  image,
  bgcolor,
  bannertext1,
  bannertext2,
  bannertext3,
  linkurl,
}) => {
  return (
    <div
      className={`p-6 rounded-lg shadow-md`}
      style={{ backgroundColor: bgcolor }}
    >
      <div className="text-sm font-semibold text-red-500 mb-1">
        {bannertext1}
      </div>
      <div className="text-2xl font-bold text-gray-800 mb-1">{bannertext2}</div>
      <div className="text-md text-gray-600 mb-4">{bannertext3}</div>
      <img
        src={image}
        alt="promo"
        className="w-40 h-40 object-contain mx-auto mb-4"
      />
      <Link
        to={linkurl}
        className="inline-block px-4 py-2 bg-red-500 text-white text-sm font-medium rounded hover:bg-red-600"
      >
        SHOP NOW
      </Link>
    </div>
  );
};

export default PromoCard;
