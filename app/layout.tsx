import "@/app/ui/global.css";

export const metadata = {
  title: {
    default: "Acme",
    template: "%s | Acme",
  },
  description: "The official Next.js Course Dashboard, built with App Router.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
