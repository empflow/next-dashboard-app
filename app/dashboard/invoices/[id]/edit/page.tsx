import EditInvoiceBreadcrumbs from "./ui/breadcrumbs";
import EditInvoiceForm from "@/app/ui/invoices/edit-form";

export default async function EditInvoice({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <>
      <EditInvoiceBreadcrumbs id={id} />
      <EditInvoiceForm id={id} />
    </>
  );
}
