import Breadcrumbs from "@/app/ui/invoices/breadcrumbs";
import { Suspense } from "react";
import CreateInvoiceFormWrapper from "@/app/ui/invoices/create-form/wrapper";
import Loading from "@/app/ui/loading";
import CreateInvoiceBreadcrumbs from "./ui/breadcrumbs";
import wait from "@/app/lib/wait";

export default async function CreateInvoice() {
  await wait(10000);
  return (
    <>
      <CreateInvoiceBreadcrumbs />
      <Suspense fallback={<Loading className="m-auto mt-10" />}>
        <CreateInvoiceFormWrapper />
      </Suspense>
    </>
  );
}
