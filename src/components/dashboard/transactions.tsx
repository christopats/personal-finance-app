import React from "react";
import TransactionDisplay from "../ui/transaction-display";
import { Button } from "../ui/button";

const Transactions = () => {
  return (
    <div>
      <span className="flex flex-row justify-between">
        <h1>Transactions</h1>
        <Button>See Details</Button>
      </span>
      <TransactionDisplay />
      <TransactionDisplay />
      <TransactionDisplay />
      <TransactionDisplay />
      <TransactionDisplay />
    </div>
  );
};

export default Transactions;
