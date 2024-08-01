import { Transaction } from "../types";
import { supabase } from "./supabase";

export async function getAllTransactionsByUserId(userId: string) {
  const { data, error } = await supabase
    .from("transactions")
    .select()
    .eq("user_id", userId)
    .order("created_at", { ascending: false });
  if (error) {
    throw error;
  }

  if (data) {
    return data;
  }
}

export async function getAllTransactionsByCategory(category: string) {
  const { data, error } = await supabase
    .from("transactions")
    .select()
    .eq("category_name", category)
    .order("created_at", { ascending: false });
  return data;
}

export async function getAllTransactionsByDate(date: Date) {
  const { data, error } = await supabase
    .from("transactions")
    .select()
    .eq("created_at", date)
    .order("created_at", { ascending: false });
  return data;
}

export async function getAllTransactionsByType(type: "deposit" | "withdraw") {
  const { data, error } = await supabase
    .from("transactions")
    .select()
    .eq("type", type)
    .order("created_at", { ascending: false });
  return data;
}

export type typeOptions = "deposit" | "withdraw";

export type TransactionParams = {
  user_id: string;
  amount: number;
  description: string;
  created_at: Date;
  category_name: string;
  type: string;
};


