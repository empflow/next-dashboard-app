import { fetchCustomers, fetchInvoiceById } from "@/app/lib/data";
import { notFound } from "next/navigation";
import EditInvoiceFormContent from "./content";

type Props = {
  id: string;
};

export default async function EditInvoiceFormWrapper({ id }: Props) {
  const [invoice, customers] = await Promise.all([
    fetchInvoiceById(id),
    fetchCustomers(),
  ]);
  if (!invoice) notFound();

  return <EditInvoiceFormContent {...{ invoice, customers }} />;
}
