import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { getAllTransactionsByUserId } from "../utils/transactions";

export const TransactionsContext = createContext<{
  transactions: any[] | undefined;
  depositTransactions: any[] | undefined;
  withdrawTransactions: any[] | undefined;
  totalExpense: number;
  totalIncome: number;
  totalBalance: number;
}>({
  transactions: undefined,
  depositTransactions: undefined,
  withdrawTransactions: undefined,
  totalExpense: 0,
  totalIncome: 0,
  totalBalance: 0,
});

interface TransactionsProps {
  id: string;
  children: ReactNode;
}

export function TransactionsProvider({ id, children }: TransactionsProps) {
  const [transactions, setTransactions] = useState<any[] | undefined>([]);

  useEffect(() => {
    async function getTransactions() {
      const transactions = await getAllTransactionsByUserId(id);
      setTransactions(transactions);
    }
    getTransactions();
  }, [id]);

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

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        depositTransactions,
        withdrawTransactions,
        totalIncome,
        totalExpense,
        totalBalance,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}

export const useTransactions = () => useContext(TransactionsContext);
