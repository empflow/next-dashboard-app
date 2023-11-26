import { fetchCustomers } from "@/app/lib/data";
import CreateInvoiceForm from ".";

export default async function CreateInvoiceFormWrapper() {
  const customers = await fetchCustomers();
  return <CreateInvoiceForm {...{ customers }} />;
}
