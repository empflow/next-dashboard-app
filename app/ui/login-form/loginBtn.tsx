import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { Button } from "../button";
import { useFormStatus } from "react-dom";
import { ReactNode } from "react";

export default function LoginBtn() {
  const { pending } = useFormStatus();
  let content: ReactNode;

  if (pending) content = "Logging In...";
  else content = "Log In";

  return (
    <Button className="mt-4 w-full">
      {content} <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
    </Button>
  );
}
