"use client";
import { useRouter } from "next/navigation";
import React from "react";

import { IoIosArrowBack } from "react-icons/io";
const BackButton = () => {
  const router = useRouter();
  const handleClose = () => router.back();
  return (
    <div
      onClick={handleClose}
      className="absolute z-10 flex items-center gap-4 "
    >
      <IoIosArrowBack className="text-3xl cursor-pointer" />
    </div>
  );
};

export default BackButton;
