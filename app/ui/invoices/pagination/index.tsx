import PaginationContent from "./content";
import { fetchInvoicesPages } from "@/app/lib/data";

type Props = {
  query: string;
};

export default async function Pagination({ query }: Props) {
  const totalPages = await fetchInvoicesPages(query);
  return <PaginationContent totalPages={totalPages} />;
}
