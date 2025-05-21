import React from "react";
import PromoCard from "./PromoCard";

const App: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <PromoCard
        image="https://www.godrejinterio.com/imagestore/B2C/56101502SD01899/56101502SD01899_A2_803x602.jpg"
        bgcolor="#ffeceb"
        bannertext1="NEW ARRIVAL"
        bannertext2="Free Seating"
        bannertext3="Up to 40% Off on Sofas"
        linkurl="/shop/free-seating"
      />

      <PromoCard
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbgJ4np0ZyzKCabwDVoWUR9QLjan28AN7GfQ&s"
        bgcolor="#f6f6f6"
        bannertext1="NEW ARRIVAL"
        bannertext2="Fresh Sofa"
        bannertext3="Up to 50% Off on Luxe"
        linkurl="/shop/fresh-sofa"
      />
    </div>
  );
};

export default App;
