import { Suspense } from "react";
import EditInvoiceFormWrapper from "./wrapper";
import Loading from "../../loading";

type Props = { id: string };

export default function EditInvoiceForm({ id }: Props) {
  return (
    <Suspense fallback={<Loading className="m-auto mt-20" />}>
      <EditInvoiceFormWrapper {...{ id }} />
    </Suspense>
  );
}
