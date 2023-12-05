import NextAuth from "next-auth";
import authConfig from "./config";
import Credentials from "next-auth/providers/credentials";
import credentialsAuthorize from "./credentialsAuthorize";

// The `credentialsAuthorize` import must not be in the `middleware.ts` file since it
// relies on some nodejs modules that are not avalable in middleware.
// So i've created a separate file with the config without the providers
// to be used in middleware.ts, and this file that you're reading right now
// spreads the config but also specifies the list of providers
export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [Credentials({ authorize: credentialsAuthorize })],
});
