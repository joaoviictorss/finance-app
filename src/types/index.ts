export type User = {
  id: string;

  full_name: string;

  email: string;

  password: string;

  avatar: string | null;
  balance: number;
  created_at: Date;
};

export type Transaction = {
  id: string;
  user_id: string;
  amount: number;
  description: string;
  created_at: Date;
  category_name: string;
  type: "deposit" | "withdraw";
};

export type ImagePaths =
  | "salary"
  | "gift"
  | "market"
  | "savings"
  | "transport"
  | "rent"
  | "medicine"
  | "food"
  | "entrertainment";
