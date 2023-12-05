import { Suspense } from "react";
import EditInvoiceBreadcrumbs from "./ui/breadcrumbs";
import Loading from "@/app/ui/loading";
import EditInvoiceForm from "@/app/ui/invoices/edit-form";

export default async function EditInvoice({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <>
      <EditInvoiceBreadcrumbs id={id} />
      <Suspense fallback={<Loading className="m-auto mt-20" />}>
        <EditInvoiceForm id={id} />
      </Suspense>
    </>
  );
}
