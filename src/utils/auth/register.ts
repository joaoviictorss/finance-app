import * as z from "zod";

import { supabase } from "../supabase";
import { getUserByEmail } from "../user";
import { RegisterSchema } from "@/src/schemas";

import * as Crypto from "expo-crypto";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validateFields = RegisterSchema.safeParse(values);

  if (!validateFields.success) {
    return { error: "Campos Invalidos!" };
  }

  const { email, password, name } = validateFields.data;

  const hashedPassword = await Crypto.digestStringAsync(
    Crypto.CryptoDigestAlgorithm.SHA256,
    password
  );

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return { error: "Este email já está sendo utilizado!" };
  }

  await supabase.from("users").insert({
    full_name: name,
    email,
    password: hashedPassword,
  });

  return { sucess: "Seu cadastro foi realizado com sucesso!" };
};
