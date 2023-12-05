"use server";

import { AuthError } from "next-auth";
import { signIn } from "../auth";

// the return value should be an error message or null
export default async function logInAction(
  _prevState: string | null,
  formData: FormData
) {
  try {
    await signIn("credentials", formData);
    return null;
  } catch (err) {
    if (err instanceof AuthError && err.type === "CredentialsSignin") {
      return "Invalid credentials";
    }
    return "Something went wrong";
  }
}
