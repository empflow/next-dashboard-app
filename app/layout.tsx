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
      <body className={`antialiased ${inter.className}`}>{children}</body>
    </html>
  );
}
