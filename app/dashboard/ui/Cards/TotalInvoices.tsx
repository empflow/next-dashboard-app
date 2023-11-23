import { fetchCardsData } from "@/app/lib/data";
import { Card } from "@/app/ui/dashboard/cards";

export default async function DashboardCardTotalInvoices() {
  const { invoicesAmount } = await fetchCardsData();
  return <Card title="Total Invoices" value={invoicesAmount} type="invoices" />;
}
