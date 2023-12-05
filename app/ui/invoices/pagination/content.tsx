"use client";

import { generatePagination } from "@/app/lib/utils";
import { usePathname, useSearchParams } from "next/navigation";
import PaginationArrow from "./arrow";
import getPaginationItemPosition from "./getPaginationItemPosition";
import PaginationNumber from "./number";

type Props = {
  totalPages: number;
};

export default function PaginationContent({ totalPages }: Props) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const currPage = Number(searchParams.get("page") ?? 1);
  const allPages = generatePagination(currPage, totalPages);

  function createPageUrl(pageNumber: number | string) {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  }

  return (
    <div className="flex">
      <PaginationArrow
        direction="left"
        href={createPageUrl(currPage - 1)}
        isDisabled={currPage <= 1}
      />

      <div className="flex">
        {allPages.map((page, index) => {
          const position = getPaginationItemPosition({
            index,
            page,
            totalPages: allPages.length,
          });
          return (
            <PaginationNumber
              key={page}
              href={createPageUrl(page)}
              page={page}
              position={position}
              isActive={currPage === page}
            />
          );
        })}
      </div>

      <PaginationArrow
        direction="right"
        href={createPageUrl(currPage + 1)}
        isDisabled={currPage >= totalPages}
      />
    </div>
  );
}
