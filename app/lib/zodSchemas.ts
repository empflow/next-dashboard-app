import { z } from "zod";

export const userSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  password: z.string(),
});
export type User = z.infer<typeof userSchema>;

export const customerSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  image_url: z.string(),
});
export type Customer = z.infer<typeof customerSchema>;

export const revenueSchema = z.object({
  month: z.string(),
  revenue: z.number(),
});
export type Revenue = z.infer<typeof revenueSchema>;

export const latestInvoiceSchema = z.object({
  invoice_id: z.string(),
  amount: z.string(),
  customer_name: z.string(),
  customer_image_url: z.string(),
  customer_email: z.string(),
});
export type LatestInvoice = z.infer<typeof latestInvoiceSchema>;

export const latestInvoiceRawSchema = latestInvoiceSchema.extend({
  amount: z.number(),
});
export type LatestInvoiceRaw = z.infer<typeof latestInvoiceRawSchema>;

export const invoicesTableSchema = z.object({
  id: z.string(),
  customer_id: z.string(),
  name: z.string(),
  email: z.string(),
  image_url: z.string(),
  date: z.string(),
  amount: z.number(),
  status: z.enum(["pending", "paid"]),
});
export type InvoicesTable = z.infer<typeof invoicesTableSchema>;

export const customersTableSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  image_url: z.string(),
  total_invoices: z.number(),
  total_pending: z.number(),
  total_paid: z.number(),
});
export type CustomersTable = z.infer<typeof customersTableSchema>;

export const formattedCustomersTableSchema = customersTableSchema.extend({
  total_pending: z.string(),
  total_paid: z.string(),
});
export type FormattedCustomersTable = z.infer<
  typeof formattedCustomersTableSchema
>;

export const customerFieldSchema = z.object({
  id: z.string(),
  name: z.string(),
});
export type CustomerField = z.infer<typeof customerFieldSchema>;

export const invoiceSchema = z.object({
  id: z.string(),
  customer_id: z.string(),
  amount: z.coerce.number().gt(0),
  status: z.enum(["pending", "paid"]),
  date: z.string().optional(),
});
export type Invoice = z.infer<typeof invoiceSchema>;

export const invoiceFormSchema = invoiceSchema.omit({
  id: true,
  date: true,
});
export type InvoiceFormSchema = z.infer<typeof invoiceFormSchema>;
