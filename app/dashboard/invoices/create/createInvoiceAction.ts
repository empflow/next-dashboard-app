"use server";

import { CreateInvoiceActionState } from "@/app/lib/types";
import { invoiceFormSchema } from "@/app/lib/zodSchemas";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function createInvoice(
  _prevState: CreateInvoiceActionState,
  formData: FormData
): Promise<CreateInvoiceActionState> {
  const validationResult = invoiceFormSchema.safeParse({
    customer_id: formData.get("customerId"),
    amount: formData.get("amount"),
    status: formData.get("status"),
  });
  if (!validationResult.success) {
    return {
      message: "Invalid data",
      errors: validationResult.error.flatten().fieldErrors,
    };
  }

  const { amount, customer_id, status } = validationResult.data;
  const centsAmount = amount * 100;

  try {
    await sql`INSERT INTO invoices
      (customer_id, amount, status)
      VALUES (${customer_id}, ${centsAmount}, ${status})`;
  } catch (err) {
    return { message: "Internal error" };
  }

  revalidatePath("/dashboard/invoices");
  redirect("/dashboard/invoices");
}
