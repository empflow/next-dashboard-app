import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import { ReactNode } from "react";

type Props = {
  errMsg: string | null;
};
export default function LoginFormErrs({ errMsg }: Props) {
  let content: ReactNode;
  if (errMsg) {
    content = (
      <>
        <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
        <p className="text-sm text-red-500">{errMsg}</p>
      </>
    );
  } else content = null;

  return (
    <div
      className="flex h-8 items-end space-x-1"
      aria-live="polite"
      aria-atomic="true"
    >
      {content}
    </div>
  );
}
