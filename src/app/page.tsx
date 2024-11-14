import BalanceDisplay from "@/components/dashboard/balance-display";
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
