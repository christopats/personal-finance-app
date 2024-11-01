import Link from "next/link";
import Image from "next/image";
import avatar from "/public/avatars/yuna-kim.jpg";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import BalanceDisplay from "@/components/dashboard/balance-display";
import { PotDisplay } from "@/components/ui/pot-display";
import Pots from "@/components/dashboard/pots";
import Transactions from "@/components/dashboard/transactions";

export default function Overview() {
  return (
    <>
      <h1>Overview</h1>
      <div className="flex-col">
        <BalanceDisplay></BalanceDisplay>
        <BalanceDisplay></BalanceDisplay>
        <BalanceDisplay></BalanceDisplay>
      </div>
      <Pots />
      <Transactions></Transactions>
    </>
  );
}
