import { fetchCardsData } from "@/app/lib/data";
import { Card } from "@/app/ui/dashboard/cards";

export default async function DashboardCardTotalPaidInvoices() {
  const { totalPaidInvoices } = await fetchCardsData();
  return <Card title="Collected" value={totalPaidInvoices} type="collected" />;
}
