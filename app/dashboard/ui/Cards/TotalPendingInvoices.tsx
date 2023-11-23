import { fetchCardsData } from "@/app/lib/data";
import { Card } from "@/app/ui/dashboard/cards";

export default async function DashboardCardTotalPendingInvoices() {
  const { totalPendingInvoices } = await fetchCardsData();
  return <Card title="Pending" value={totalPendingInvoices} type="pending" />;
}
