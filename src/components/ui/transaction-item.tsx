import { cn } from "@/src/lib/util";
import { ImagePaths, Transaction } from "@/src/types";
import { formatDate, formatMonth } from "@/src/utils/format-date";
import { formatter } from "@/src/utils/formater";
import { Text, View } from "react-native";
import CustomImage from "./custom-image";

type MonthData = { month: string; transactions: Transaction[] };

interface TransactionItemProps {
  data: MonthData;
}

const TransactionItem = ({ data }: TransactionItemProps) => {
  return (
    <>
      <View className="mt-4 ml-1">
        <Text className="font-[PoppinsMedium] text-base text-customGreen-900">
          {formatMonth(data.month).charAt(0).toUpperCase() +
            formatMonth(data.month).slice(1)}
        </Text>
      </View>
      {data.transactions.map((transaction) => (
        <View
          className="flex-row items-center justify-between mt-4"
          key={transaction.id}
        >
          <View className="flex-row items-center gap-2 max-w-48 w-full justidy-center">
            <View className="bg-customBlue-400 p-4 rounded-3xl">
              <CustomImage
                imagePath={transaction.category_name as ImagePaths}
              />
            </View>

            <View className="">
              <Text
                className="font-[PoppinsMedium] text-base text-customGreen-900 max-w-36"
                numberOfLines={1}
              >
                {transaction.description}
              </Text>
              <Text className="font-[PoppinsSemiBold] text-xs text-customBlue-500">
                {formatDate(transaction.created_at)}
              </Text>
            </View>
          </View>
          <View className="flex-row items-center justify-between max-w-20 h-full w-full">
            <View className="w-px h-10 bg-customGreen-500" />

            <Text className="text-customGreen-900 font-[PoppinsLight] text-xs">
              {transaction.type === "deposit" ? "Entrada" : "Saída"}
            </Text>

            <View className="w-px h-10 bg-customGreen-500" />
          </View>
          <View className="items-end justify-end flex-row max-w-24 w-full">
            <Text
              className={cn(
                " items-end justify-end text-end font-[PoppinsMedium] text-base",
                transaction.type === "deposit"
                  ? "text-customGreen-900"
                  : "text-customBlue-500"
              )}
            >
              {transaction.type === "withdraw" && "- "}
              {formatter.format(transaction.amount)}
            </Text>
          </View>
        </View>
      ))}
    </>
  );
};

export default TransactionItem;
