"use server";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";

export default async function deleteInvoice(id: string) {
  try {
    await sql`DELETE FROM invoices WHERE id = ${id}`;
  } catch (err) {
    console.error(err);
  }
  revalidatePath("/dashboard/invoices");
}
