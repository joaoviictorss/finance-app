import {
  FlatList,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from "react-native";
import { useTransactions } from "@/src/context/transactions";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import { Image } from "expo-image";
import CustomCalendar from "@/src/components/ui/custom-calendar";
import { DateData } from "react-native-calendars";
import { useState } from "react";
import { Transaction } from "@/src/types";
import TransactionItem from "@/src/components/ui/transaction-item";
import { formatDate } from "@/src/utils/format-date";

const Analysis = () => {
  const [day, setDay] = useState<DateData>();
  const [formattedDay, setFormattedDay] = useState(new Date());
  const navigation = useNavigation();
  const { transactions } = useTransactions();

  const selectDay = (day: DateData) => {
    setDay(day);
    setFormattedDay(new Date(day.dateString));
  };

  type transactionType = any[] | undefined;

  function filterTransactionsByDay(transactions: transactionType, day: Date) {
    const targetDate = new Date(day);

    return transactions?.filter((transaction) => {
      const transactionDate = new Date(transaction.created_at);
      return (
        transactionDate.getFullYear() === targetDate.getFullYear() &&
        transactionDate.getMonth() === targetDate.getMonth() &&
        transactionDate.getDate() === targetDate.getDate() + 1
      );
    });
  }

  const filteredTransactions = filterTransactionsByDay(
    transactions,
    formattedDay
  );

  return (
    <SafeAreaView className="flex-1 bg-customGreen-500 ">
      <View className="pt-16 p-8">
        <View className="flex-row items-center justify-between">
          <Pressable onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back-outline" size={24} color="#f1fff3" />
          </Pressable>
          <Text className="text-customGreen-900 font-[PoppinsSemiBold] text-xl">
            Calendario
          </Text>
          <Pressable className="bg-customGreen-200 rounded-full p-2 items-center justify-center">
            <Image
              source={require("@/src/assets/icons/bell.svg")}
              style={{ width: 20, height: 20 }}
              contentFit="contain"
              tintColor={"#031314"}
            />
          </Pressable>
        </View>
      </View>
      <View className="bg-customGreen-200 flex-1 rounded-t-[40px] p-8 flex-col gap-4 pt-2 w-full mt-10 z-20">
        <View>
          <CustomCalendar value={day} onChange={selectDay} />
        </View>

        {day && (
          <Text className="text-customGreen-900 font-[PoppinsSemiBold] text-base">
            {new Date(day.year, day.month - 1, day.day).toLocaleDateString(
              "in-IN",
              {
                day: "2-digit",
                month: "long",
              }
            )}
          </Text>
        )}

        {filteredTransactions!.length > 0 ? (
          <FlatList
            data={filteredTransactions}
            renderItem={({ item }) => <TransactionItem data={item} />}
            keyExtractor={(item) => item.id}
            style={{ marginBottom: 80 }}
          />
        ) : (
          <View className=" items-center justify-center">
            <Text className="text-customGreen-800 font-[PoppinsSemiBold] text-xl">
              Nenhuma transação nesta data
            </Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Analysis;
