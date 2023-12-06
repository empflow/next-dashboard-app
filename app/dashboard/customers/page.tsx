import CustomersTable from "@/app/ui/customers";

export const metadata = {
  title: "Customers",
};

type Context = {
  searchParams: {
    q?: string;
  };
};

export default function Customers({ searchParams: { q } }: Context) {
  return <CustomersTable {...{ query: q }} />;
}
