import { fetchCardsData } from "@/app/lib/data";
import { Card } from "@/app/ui/dashboard/cards";

export default async function DashboardCardTotalCustomers() {
  const { customersAmount } = await fetchCardsData();
  return (
    <Card title="Total Customers" value={customersAmount} type="customers" />
  );
}
