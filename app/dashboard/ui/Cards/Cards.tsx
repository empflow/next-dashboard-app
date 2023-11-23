import DashboardCardTotalPaidInvoices from "./TotalPaidInvoices";
import DashboardCardTotalInvoices from "./TotalInvoices";
import DashboardCardTotalPendingInvoices from "./TotalPendingInvoices";
import DashboardCardTotalCustomers from "./TotalCusomters";
import { Suspense } from "react";
import Loading from "@/app/ui/loading/loading";

export default function DashboardCards() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <Suspense fallback={<Loading />}>
        <DashboardCardTotalPaidInvoices />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <DashboardCardTotalInvoices />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <DashboardCardTotalPendingInvoices />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <DashboardCardTotalCustomers />
      </Suspense>
    </div>
  );
}
