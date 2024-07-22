import { supabase } from "./supabase";

export const getUserByEmail = async (email: string) => {
  try {
    const { data, error } = await supabase
      .from("users")
      .select()
      .eq("email", email)
      .single();

    return data;
  } catch {
    return null;
  }
};

export const getUserById = async (id: string) => {
  try {
    const { data, error } = await supabase
      .from("users")
      .select()
      .eq("id", id)
      .single();

    return data;
  } catch {
    return null;
  }
};
