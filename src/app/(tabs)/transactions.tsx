import { Ionicons } from "@expo/vector-icons";
import { useCallback, useState } from "react";
import {
  FlatList,
  Pressable,
  RefreshControl,
  SafeAreaView,
  Text,
  View,
} from "react-native";
import { formatter } from "@/src/utils/formater";
import { Link, useNavigation } from "expo-router";
import { Image } from "expo-image";
import TransactionItem from "@/src/components/ui/transaction-item";
import { cn } from "@/src/lib/util";
import { useTransactions } from "@/src/context/transactions";

const Transactions = () => {
  const navigation = useNavigation();
  const [filter, setFilter] = useState("");

  const { totalIncome, totalExpense, totalBalance, transactions } =
    useTransactions();

  const handleFilterClick = (type: string) => {
    setFilter((prevFilter) => (prevFilter === type ? "" : type));
  };

  const filteredTransactions = filter
    ? transactions?.filter((transaction) => transaction.type === filter)
    : transactions;

  const groupedByMonth = filteredTransactions?.reduce((acc, transaction) => {
    const date = new Date(transaction.created_at);
    const yearMonth = `${date.getFullYear()}-${(date.getMonth() + 2) // Todo: Corrigir o fuso horário
      .toString()
      .padStart(2, "0")}`; // Formato: YYYY-MM

    const existingGroup = acc.find(
      (group: { month: string }) => group.month === yearMonth
    );

    if (existingGroup) {
      existingGroup.transactions.push(transaction);
    } else {
      acc.push({ month: yearMonth, transactions: [transaction] });
    }

    return acc;
  }, []);

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-customGreen-500">
      <View className="pt-16 p-8">
        <View className="flex-row items-center justify-between">
          <Pressable onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back-outline" size={24} color="#f1fff3" />
          </Pressable>
          <Text className="text-customGreen-900 font-[PoppinsSemiBold] text-xl">
            Transações
          </Text>
          <Pressable className="bg-customGreen-200 rounded-full p-2 items-center justify-center">
            <Image
              source={require("../../assets/icons/bell.svg")}
              style={{ width: 20, height: 20 }}
              contentFit="contain"
              tintColor={"#031314"}
            />
          </Pressable>
        </View>
        <View className="items-center justify-center bg-customGreen-200 rounded-2xl w-full h-24 mt-6">
          <Text className="text-customGreen-900 font-[PoppinsMedium] text-base">
            Total Balance
          </Text>
          <Text className="text-customGreen-900 font-[PoppinsBold] text-2xl">
            {formatter.format(totalBalance)}
          </Text>
        </View>
        <View className="flex-row items-center justify-between mt-6 gap-4 ">
          <Pressable
            className={cn(
              "bg-customGreen-200 rounded-2xl flex-1 items-center p-3",
              filter === "deposit" && "bg-customBlue-500"
            )}
            onPress={() => handleFilterClick("deposit")}
          >
            <Image
              source={require("../../assets/icons/income.svg")}
              style={{ width: 24, height: 24, marginBottom: 4 }}
              contentFit="contain"
              tintColor={filter === "deposit" ? "white" : ""}
            />
            <Text
              className={cn(
                "text-customGreen-900 font-[PoppinsMedium] text-base",
                filter === "deposit" && "text-white"
              )}
            >
              Entradas
            </Text>
            <Text
              className={cn(
                "font-[PoppinsSemiBold] text-xl text-customgreen-900",
                filter === "deposit" && "text-white"
              )}
            >
              {formatter.format(totalIncome)}
            </Text>
          </Pressable>
          <Pressable
            className={cn(
              "bg-customGreen-200 rounded-2xl flex-1 items-center p-3",
              filter === "withdraw" && "bg-customBlue-500"
            )}
            onPress={() => handleFilterClick("withdraw")}
          >
            <Image
              source={require("../../assets/icons/expenses.svg")}
              style={{ width: 24, height: 24, marginBottom: 4 }}
              contentFit="contain"
              tintColor={filter === "withdraw" ? "white" : "#0068ff"}
            />
            <Text
              className={cn(
                "text-customGreen-900 font-[PoppinsMedium] text-base",
                filter === "withdraw" && "text-white"
              )}
            >
              Saídas
            </Text>
            <Text
              className={cn(
                "font-[PoppinsSemiBold] text-xl text-customBlue-500",
                filter === "withdraw" && "text-white"
              )}
            >
              {formatter.format(totalExpense)}
            </Text>
          </Pressable>
        </View>
      </View>
      <View className="bg-customGreen-200 flex-1 rounded-t-[40px] p-8 flex-col gap-4 pt-2 w-full ">
        <FlatList
          extraData={groupedByMonth}
          refreshing={refreshing}
          onRefresh={onRefresh}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          data={groupedByMonth}
          renderItem={({ item }) => <TransactionItem data={item} />}
          keyExtractor={(item) => item.month}
          style={{ marginBottom: 80 }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Transactions;
