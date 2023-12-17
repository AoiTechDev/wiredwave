import React from "react";

const PriceRange = () => {
  return (
    <div className="py-2 flex flex-col gap-2">
      <p>Price Range</p>
      <div className="flex flex-col gap-2">
       <PriceRange placeholder='0$'/>
       <PriceRange placeholder='10000$'/>
      
      </div>
    </div>
  );
};

export default PriceRange;
