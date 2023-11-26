import Breadcrumbs from "@/app/ui/invoices/breadcrumbs";

export default function CreateInvoiceBreadcrumbs() {
  return (
    <Breadcrumbs
      breadcrumbs={[
        { label: "Invoices", href: "/dashboard/invoices" },
        {
          label: "Create Invoice",
          href: "/dashboard/invoices/create",
          active: true,
        },
      ]}
    />
  );
}
