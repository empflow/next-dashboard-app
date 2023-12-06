import { Suspense } from "react";
import Loading from "../loading";
import CustomersTableContent from "./content";

type Props = {
  query?: string;
};

export default function CustomersTable({ query }: Props) {
  return (
    <Suspense fallback={<Loading className="m-auto mt-20" />}>
      <CustomersTableContent {...{ query }} />
    </Suspense>
  );
}
