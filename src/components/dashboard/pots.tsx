import React from "react";
import { Button } from "../ui/button";
import { PotDisplay } from "../ui/pot-display";
import { TotalSaved } from "../ui/total-saved";

const Pots = () => {
  return (
    <>
      <span className="flex justify-between">
        <h2>Pots</h2>
        <Button>See Details</Button>
      </span>
      <PotDisplay ></PotDisplay>
      <div className="grid grid-cols-2">
        <TotalSaved></TotalSaved>
        <TotalSaved></TotalSaved>
        <TotalSaved></TotalSaved>
        <TotalSaved></TotalSaved>
      </div>
    </>
  );
};

export default Pots;
