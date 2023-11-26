import Loading from "@/app/ui/loading";
import CreateInvoiceBreadcrumbs from "./ui/breadcrumbs";

export default function CreateInvoiceLoading() {
  return (
    <>
      <CreateInvoiceBreadcrumbs />
      <Loading className="m-auto mt-10" />
    </>
  );
}
