// import { Card } from "@/app/ui/dashboard/cards";
import RevenueChart from "@/app/ui/dashboard/revenue-chart";
import LatestInvoices from "@/app/ui/dashboard/latest-invoices";
import { Suspense } from "react";
import { Metadata } from "next";
import DashboardCards from "./ui/Cards/Cards";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default async function Page() {
  return (
    <main>
      <h1 className={`mb-4 text-xl md:text-2xl`}>Dashboard</h1>
      <DashboardCards />
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback="Loading revenue...">
          <RevenueChart />
        </Suspense>
        <Suspense fallback="Loading latest invoices...">
          <LatestInvoices />
        </Suspense>
      </div>
    </main>
  );
}
