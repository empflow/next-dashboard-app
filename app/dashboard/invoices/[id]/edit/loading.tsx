import Loading from "@/app/ui/loading";
import EditInvoiceBreadcrumbs from "./ui/breadcrumbs";

export default function EditInvoicesLoading() {
  return (
    <>
      <EditInvoiceBreadcrumbs />
      <Loading className="m-auto mt-20" />
    </>
  );
}
