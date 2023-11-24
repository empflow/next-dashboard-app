import { fetchCardsData } from "@/app/lib/data";
import { Card } from "@/app/ui/dashboard/cards";

export default async function DashboardCardsContent() {
  const {
    customersAmount,
    invoicesAmount,
    totalPaidInvoices,
    totalPendingInvoices,
  } = await fetchCardsData();
  return (
    <>
      <Card title="Collected" value={totalPaidInvoices} type="collected" />
      <Card title="Total Invoices" value={invoicesAmount} type="invoices" />
      <Card title="Pending" value={totalPendingInvoices} type="pending" />
      <Card title="Total Customers" value={customersAmount} type="customers" />
    </>
  );
}
