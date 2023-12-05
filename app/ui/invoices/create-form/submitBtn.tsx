import { useFormStatus } from "react-dom";
import { Button } from "../../button";
import { ReactNode } from "react";

type Props = {};

export default function CreateInvoiceFormSubmitBtn({}: Props) {
  const { pending } = useFormStatus();
  let content: ReactNode;

  if (pending) content = "Sending...";
  else content = "Send";

  return <Button>{content}</Button>;
}
