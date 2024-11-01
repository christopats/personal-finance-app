import React from "react";
import potIcon from "/public/images/icon-pot.svg";
import Image from "next/image";

export const PotDisplay = () => {
  return (
    <div className="flex w-dvw bg-gray-300">
      <div>
        <Image src={potIcon} width={50} height={50} alt="Avatar" unoptimized />
      </div>
      <div>
        <h3>Total Saved</h3>
        <p>$850</p>
      </div>
    </div>
  );
};
