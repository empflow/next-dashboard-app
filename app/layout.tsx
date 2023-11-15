import "@/app/ui/global.css";
import { inter } from "./ui/fonts";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`antialiased ${inter.className}`}>
        <nav className="flex mb-3 flex-col gap-1">
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/dashboard/customers">Customers</Link>
          <Link href="/dashboard/invoices">Invoices</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
