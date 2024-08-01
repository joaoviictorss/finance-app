import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  getAllTransactionsByUserId,
  TransactionParams,
} from "../utils/transactions";
import { supabase } from "../utils/supabase";
import { set } from "zod";

export const TransactionsContext = createContext<{
  transactions: any[] | undefined;
  depositTransactions: any[] | undefined;
  withdrawTransactions: any[] | undefined;
  totalExpense: number;
  totalIncome: number;
  totalBalance: number;
  createTransaction: (params: TransactionParams) => Promise<void>;
}>({
  transactions: undefined,
  depositTransactions: undefined,
  withdrawTransactions: undefined,
  totalExpense: 0,
  totalIncome: 0,
  totalBalance: 0,
  createTransaction: (params: TransactionParams) => Promise.resolve(),
});

interface TransactionsProps {
  id: string;
  children: ReactNode;
}

export function TransactionsProvider({ id, children }: TransactionsProps) {
  const [transactions, setTransactions] = useState<any[] | undefined>([]);
  const [isAddedTransaction, setIsAddedTransaction] = useState(false);

  useEffect(() => {
    async function getTransactions() {
      const transactions = await getAllTransactionsByUserId(id);
      setTransactions(transactions);
    }
    getTransactions();
  }, [id, isAddedTransaction]);

  const depositTransactions = transactions?.filter(
    (transaction) => transaction.type === "deposit"
  );

  const withdrawTransactions = transactions?.filter(
    (transaction) => transaction.type === "withdraw"
  );

  const totalIncome = depositTransactions?.reduce((acc, curr) => {
    return acc + curr.amount;
  }, 0);

  const totalExpense = withdrawTransactions?.reduce((acc, curr) => {
    return acc + curr.amount;
  }, 0);

  const totalBalance = totalIncome - totalExpense;

  async function createTransaction({
    user_id,
    amount,
    description,
    category_name,
    type,
    created_at,
  }: TransactionParams) {
    try {
      const { data, error } = await supabase
        .from("transactions")
        .insert({
          user_id,
          amount,
          description,
          category_name,
          type,
          created_at,
        })
        .single();

      setIsAddedTransaction(true);

      if (error) {
        throw error;
      }
    } catch (error) {
      alert(error);
    }
  }

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        depositTransactions,
        withdrawTransactions,
        totalIncome,
        totalExpense,
        totalBalance,
        createTransaction,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}

export const useTransactions = () => useContext(TransactionsContext);
