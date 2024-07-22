import * as z from "zod";
import { getUserByEmail } from "../user";
import { LoginSchema } from "@/src/schemas";

import * as Crypto from "expo-crypto";

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validateFields = LoginSchema.safeParse(values);

  if (!validateFields.success) {
    return { error: "Campos Invalidos!" };
  }

  const { email, password } = validateFields.data;

  const existingUser = await getUserByEmail(email);

  if (!existingUser || !existingUser.email || !existingUser.password) {
    return { error: "Este usuario não existe!" };
  }

  try {
    if (validateFields.success) {
      const { email, password } = validateFields.data;

      const user = await getUserByEmail(email);
      if (!user || !user.password) return null;

      const hashedPassword = await Crypto.digestStringAsync(
        Crypto.CryptoDigestAlgorithm.SHA256,
        password
      );

      const passwordsMatchs = hashedPassword === user.password;

      if (passwordsMatchs) return user;
    }
  } catch (error) {
    throw error;
  }
};
