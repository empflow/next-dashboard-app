import Breadcrumbs from "@/app/ui/invoices/breadcrumbs";

type Props = {
  id?: string;
};

export default function EditInvoiceBreadcrumbs({ id }: Props) {
  return (
    <Breadcrumbs
      breadcrumbs={[
        { label: "Invoices", href: "/dashboard/invoices" },
        {
          label: "Edit Invoice",
          href: id ? `/dashboard/invoices/${id}/edit` : undefined,
          active: true,
        },
      ]}
    />
  );
}
