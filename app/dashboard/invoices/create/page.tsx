import { Suspense } from "react";
import Loading from "@/app/ui/loading";
import CreateInvoiceBreadcrumbs from "./ui/breadcrumbs";
import CreateInvoiceForm from "@/app/ui/invoices/create-form";

export const metadata = {
  title: "Create Invoice",
};

export default async function CreateInvoice() {
  return (
    <>
      <CreateInvoiceBreadcrumbs />
      <Suspense fallback={<Loading className="m-auto mt-20" />}>
        <CreateInvoiceForm />
      </Suspense>
    </>
  );
}
