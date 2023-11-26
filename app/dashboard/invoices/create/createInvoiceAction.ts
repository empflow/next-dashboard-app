"use server";

import { invoiceFormSchema } from "@/app/lib/zodSchemas";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function createInvoice(formData: FormData) {
  const { amount, customer_id, status } = invoiceFormSchema.parse({
    customer_id: formData.get("customerId"),
    amount: formData.get("amount"),
    status: formData.get("status"),
  });
  const amountInCents = amount * 100;

  const result = await sql`INSERT INTO invoices
  (customer_id, amount, status)
  VALUES (${customer_id}, ${amountInCents}, ${status})`;
  console.log(result);

  revalidatePath("/dashboard/invoices");
  redirect("/dashboard/invoices");
}
