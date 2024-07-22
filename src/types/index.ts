export type User = {
  id: string;
  full_name: string;
  email: string;
  password: string;
  avatar: string | null;
  balance: number;
  created_at: Date;
};
