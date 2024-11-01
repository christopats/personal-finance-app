import React from "react";
import Image from "next/image";
import transactionAvatar from "/public/avatars/yuna-kim.jpg";

const TransactionDisplay = () => {
  return (
    <div className="flex justify-between items-center border-b-2">
      <Image
        src={transactionAvatar}
        width={50}
        height={50}
        alt=""
        className="rounded-full"
      />
      <p>Yuna Kim</p>
      <div>
        <p>+$75.50</p>
        <p>19 Aug 2024</p>
      </div>
    </div>
  );
};

export default TransactionDisplay;
