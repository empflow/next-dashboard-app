import DashboardCardTotalPaidInvoices from "./TotalPaidInvoices";
import DashboardCardTotalInvoices from "./TotalInvoices";
import DashboardCardTotalPendingInvoices from "./TotalPendingInvoices";
import DashboardCardTotalCustomers from "./TotalCusomters";
import { Suspense } from "react";
import { CardSkeleton } from "@/app/ui/skeletons";

export default function DashboardCards() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <Suspense fallback={<CardSkeleton />}>
        <DashboardCardTotalPaidInvoices />
      </Suspense>

      <Suspense fallback={<CardSkeleton />}>
        <DashboardCardTotalInvoices />
      </Suspense>

      <Suspense fallback={<CardSkeleton />}>
        <DashboardCardTotalPendingInvoices />
      </Suspense>

      <Suspense fallback={<CardSkeleton />}>
        <DashboardCardTotalCustomers />
      </Suspense>
    </div>
  );
}
