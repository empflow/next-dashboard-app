import Search from "@/app/ui/search";
import { CreateInvoice } from "@/app/ui/invoices/buttons";
import PaginationWrapper from "@/app/ui/invoices/pagination/wrapper";
import InvoicesTableWrapper from "@/app/ui/invoices/table/table-wrapper";

type Params = {
  searchParams?: {
    q?: string;
    page?: string;
  };
};

export default async function Page({ searchParams }: Params) {
  const query = searchParams?.q ?? "";
  const currPage = Number(searchParams?.page ?? 1);

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`text-2xl`}>Invoices</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search invoices..." />
        <CreateInvoice />
      </div>
      <InvoicesTableWrapper {...{ currPage, query }} />
      <PaginationWrapper query={query} />
    </div>
  );
}
