"use server";

import { invoiceFormSchema } from "@/app/lib/zodSchemas";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function updateInvoice(id: string, formData: FormData) {
  try {
    const { customer_id, amount, status } = invoiceFormSchema.parse(
      Object.fromEntries(formData.entries())
    );
    const amountInCents = amount * 100;

    await sql`
    UPDATE invoices
    SET customer_id = ${customer_id}, amount = ${amountInCents}, status = ${status}
    WHERE id = ${id}`;
    revalidatePath("/dashboard/invoices");
  } catch (err) {
    console.error(err);
  }

  // redirect() works by throwing an error
  // so it needs to be outside of the try-catch block
  redirect("/dashboard/invoices");
}
