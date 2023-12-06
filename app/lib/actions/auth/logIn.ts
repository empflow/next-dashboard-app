"use server";

import { AuthError } from "next-auth";
import { signIn } from "../../auth";
import { signInCredentialsSchema } from "../../zodSchemas";

// the return value should be an error message or null
export default async function logIn(
  _prevState: string | null,
  formData: FormData
) {
  try {
    const parsedCredentials = signInCredentialsSchema.parse(
      Object.fromEntries(formData.entries())
    );
    await signIn("credentials", {
      ...parsedCredentials,
      redirectTo: "/dashboard",
    });
    return null;
  } catch (err) {
    if (err instanceof AuthError && err.type === "CredentialsSignin") {
      return "Invalid credentials";
    }
    return "Something went wrong";
  }
}
