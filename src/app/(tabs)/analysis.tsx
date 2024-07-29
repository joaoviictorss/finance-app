import { SafeAreaView, Text } from "react-native";
import { useTransactions } from "@/src/context/transactions";

const Analysis = () => {
  const { totalBalance } = useTransactions();
  return (
    <SafeAreaView className="flex-1 items-center justify-center">
      <Text>{totalBalance.toFixed(2)}</Text>
    </SafeAreaView>
  );
};

export default Analysis;
