import DashboardCardsContent from "./CardsContent";
import { Suspense } from "react";
import { CardsSkeleton } from "@/app/ui/skeletons";

export default function DashboardCards() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <Suspense fallback={<CardsSkeleton />}>
        <DashboardCardsContent />
      </Suspense>
    </div>
  );
}
