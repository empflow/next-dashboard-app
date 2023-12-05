import { fetchCustomers } from "@/app/lib/data";
import CreateInvoiceFormContent from "./content";

export default async function CreateInvoiceForm() {
  const customers = await fetchCustomers();
  return <CreateInvoiceFormContent customers={customers} />;
}
