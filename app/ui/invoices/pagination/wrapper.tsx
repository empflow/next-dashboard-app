import { Suspense } from "react";
import Pagination from ".";
import { PaginationSkeleton } from "../../skeletons";

type Props = {
  query: string;
};

export default function PaginationWrapper({ query }: Props) {
  return (
    <div className="mt-5 flex w-full justify-center">
      <Suspense fallback={<PaginationSkeleton />}>
        <Pagination query={query} />
      </Suspense>
    </div>
  );
}
