import { sql } from "@vercel/postgres";
import { formatCurrency } from "./utils";
// `cache` from react is used to dedupe requests
// `unstable_cache` from next is used to dedupe *and* cache requests
import { cache as reactCache } from "react";
import {
  unstable_noStore as nextCacheNoStore,
  // unstable_cache as nextCacheStore,
} from "next/cache";
import {
  CustomerField,
  CustomersTable,
  FormattedCustomersTable,
  Invoice,
  InvoicesTable,
  LatestInvoiceRaw,
  Revenue,
  User,
} from "./zodSchemas";

export const fetchRevenue = reactCache(async () => {
  nextCacheNoStore();
  const data = (await sql<Revenue>`SELECT * FROM revenue`).rows;
  return data;
});

export const fetchLatestInvoices = reactCache(async () => {
  nextCacheNoStore();
  const data = await sql<LatestInvoiceRaw>`
      SELECT
      i.id AS invoice_id,
      i.amount,
      c.name AS customer_name,
      c.image_url AS customer_image_url,
      c.email AS customer_email
      FROM invoices AS i
      INNER JOIN customers AS c ON i.customer_id = c.id
      ORDER BY i.date DESC
      LIMIT 5`;

  return data.rows.map((invoice) => ({
    ...invoice,
    amount: formatCurrency(invoice.amount),
  }));
});

export const fetchCardsData = reactCache(async function () {
  nextCacheNoStore();
  const invoiceCountPromise = sql`SELECT COUNT(*) FROM invoices`;
  const customerCountPromise = sql`SELECT COUNT(*) FROM customers`;
  const invoiceStatusPromise = sql`SELECT
         SUM(CASE WHEN status = 'paid' THEN amount ELSE 0 END) AS "paid",
         SUM(CASE WHEN status = 'pending' THEN amount ELSE 0 END) AS "pending"
         FROM invoices`;

  const data = await Promise.all([
    invoiceCountPromise,
    customerCountPromise,
    invoiceStatusPromise,
  ]);

  const invoicesAmount = Number(data[0].rows[0].count ?? "0");
  const customersAmount = Number(data[1].rows[0].count ?? "0");
  const totalPaidInvoices = formatCurrency(data[2].rows[0].paid ?? "0");
  const totalPendingInvoices = formatCurrency(data[2].rows[0].pending ?? "0");

  return {
    customersAmount,
    invoicesAmount,
    totalPaidInvoices,
    totalPendingInvoices,
  };
});

const ITEMS_PER_PAGE = 6;
export const fetchFilteredInvoices = reactCache(
  async (query: string, currPage: number) => {
    nextCacheNoStore();
    const offset = (currPage - 1) * ITEMS_PER_PAGE;
    const invoices = await sql<InvoicesTable>`
      SELECT
        invoices.id,
        invoices.amount,
        invoices.date,
        invoices.status,
        customers.name,
        customers.email,
        customers.image_url
      FROM invoices
      JOIN customers ON invoices.customer_id = customers.id
      WHERE
        customers.name ILIKE ${`%${query}%`} OR
        customers.email ILIKE ${`%${query}%`} OR
        invoices.amount::text ILIKE ${`%${query}%`} OR
        invoices.date::text ILIKE ${`%${query}%`} OR
        invoices.status ILIKE ${`%${query}%`}
      ORDER BY invoices.date DESC
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
    `;

    return invoices.rows;
  }
);

export const fetchInvoicesPages = reactCache(async (query: string) => {
  nextCacheNoStore();
  const count = await sql`SELECT COUNT(*)
    FROM invoices
    JOIN customers ON invoices.customer_id = customers.id
    WHERE
      customers.name ILIKE ${`%${query}%`} OR
      customers.email ILIKE ${`%${query}%`} OR
      invoices.amount::text ILIKE ${`%${query}%`} OR
      invoices.date::text ILIKE ${`%${query}%`} OR
      invoices.status ILIKE ${`%${query}%`}
  `;

  const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
  return totalPages;
});

export const fetchInvoiceById = reactCache(async (id: string) => {
  nextCacheNoStore();
  const data = await sql<Omit<Invoice, "date">>`
      SELECT
        invoices.id,
        invoices.customer_id,
        invoices.amount,
        invoices.status
      FROM invoices
      WHERE invoices.id = ${id};
    `;
  if (!data.rows.length) return null;

  const invoice = data.rows.map((invoice) => ({
    ...invoice,
    // Convert amount from cents to dollars
    amount: invoice.amount / 100,
  }));

  return invoice[0];
});

export const fetchCustomers = reactCache(async () => {
  nextCacheNoStore();
  const data = await sql<CustomerField>`
      SELECT
        id,
        name
      FROM customers
      ORDER BY name ASC
    `;

  const customers = data.rows;
  return customers;
});

export const fetchFilteredCustomers = reactCache(
  async (query: string): Promise<FormattedCustomersTable[]> => {
    nextCacheNoStore();
    const data = await sql<CustomersTable>`
		SELECT
		  customers.id,
		  customers.name,
		  customers.email,
		  customers.image_url,
		  COUNT(invoices.id) AS total_invoices,
		  SUM(CASE WHEN invoices.status = 'pending' THEN invoices.amount ELSE 0 END) AS total_pending,
		  SUM(CASE WHEN invoices.status = 'paid' THEN invoices.amount ELSE 0 END) AS total_paid
		FROM customers
		LEFT JOIN invoices ON customers.id = invoices.customer_id
		WHERE
		  customers.name ILIKE ${`%${query}%`} OR
        customers.email ILIKE ${`%${query}%`}
		GROUP BY customers.id, customers.name, customers.email, customers.image_url
		ORDER BY customers.name ASC
	  `;

    const customers = data.rows.map((customer) => ({
      ...customer,
      total_pending: formatCurrency(customer.total_pending),
      total_paid: formatCurrency(customer.total_paid),
    }));

    return customers;
  }
);

export const getUser = reactCache(async (email: string) => {
  nextCacheNoStore();
  const user = await sql<User>`SELECT * from USERS where email=${email}`;

  if (!user.rows.length) return null;
  return user.rows[0];
});
