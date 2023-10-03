import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
const Navbar = () => {
  return (
    <div className="w-full flex justify-between items-center p-4 md:p-6 px-8 md:px-12 sticky">
      <div className="">WiredWave</div>
      <div className="flex gap-4 md:gap-6 lg:gap-8">
        <div className="bg-[#212121] p-3 rounded-full">
          <BiSearchAlt className="text-2xl md:text-3xl lg:text-4xl" />
        </div>
        <div className="bg-[#212121] p-3 rounded-full relative">
          {" "}
          <AiOutlineShoppingCart className="text-2xl md:text-3xl lg:text-4xl" />{" "}
          <span className="absolute w-6 flex justify-center items-center rounded-full bg-[#0074E4] top-0 right-0">
            1
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;