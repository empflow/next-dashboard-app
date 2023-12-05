import bcrypt from "bcrypt";
import { CredentialsConfig } from "next-auth/providers/credentials";
import { signInCredentialsSchema } from "../zodSchemas";
import { getUser } from "../data";

const credentialsAuthorize: CredentialsConfig["authorize"] = async (
  credentials
) => {
  const parsedCredentials = signInCredentialsSchema.safeParse(credentials);
  if (!parsedCredentials.success) return null;

  const { email, password } = parsedCredentials.data;
  const user = await getUser(email);
  if (!user) return null;

  const doPasswordsMatch = await bcrypt.compare(password, user.password);
  if (!doPasswordsMatch) return null;

  return user;
};

export default credentialsAuthorize;
