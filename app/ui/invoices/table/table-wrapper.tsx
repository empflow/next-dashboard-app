import { Suspense } from "react";
import { InvoicesTableProps } from "./table";
import { InvoicesTableSkeleton } from "../../skeletons";
import Table from "@/app/ui/invoices/table/table";

export default function InvoicesTableWrapper({
  currPage,
  query,
}: InvoicesTableProps) {
  return (
    <Suspense key={query + currPage} fallback={<InvoicesTableSkeleton />}>
      <Table query={query} currPage={currPage} />
    </Suspense>
  );
}
