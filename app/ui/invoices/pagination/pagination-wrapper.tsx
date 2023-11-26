import { Suspense } from "react";
import Pagination from "./pagination";

type Props = {
  query: string;
};

export default function PaginationWrapper({ query }: Props) {
  return (
    <div className="mt-5 flex w-full justify-center">
      <Suspense fallback={"Loading pagination..."}>
        <Pagination query={query} />
      </Suspense>
    </div>
  );
}
