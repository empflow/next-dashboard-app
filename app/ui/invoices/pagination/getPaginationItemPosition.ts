export default function getPaginationItemPosition({
  index,
  page,
  totalPages,
}: {
  index: number;
  totalPages: number;
  page: string | number;
}) {
  let position: "first" | "last" | "single" | "middle" | undefined;

  if (index === 0) position = "first";
  if (index === totalPages - 1) position = "last";
  if (totalPages === 1) position = "single";
  if (page === "...") position = "middle";

  return position;
}
