export type NextError = Error & { digest?: string };

export type CreateInvoiceActionState = {
  errors?: {
    customerId?: string[];
    amount?: string[];
    status?: string[];
  };
  message?: string | null;
};
