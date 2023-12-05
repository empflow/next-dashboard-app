"use client";

import { CreateInvoiceActionState } from "@/app/lib/types";

type Props = {
  state: CreateInvoiceActionState;
};

export default function CreateInvoiceFormErrors({ state }: Props) {
  const { message } = state;

  if (!message) return null;
  return <div className="text-red-500">Error: {message}</div>;
}
