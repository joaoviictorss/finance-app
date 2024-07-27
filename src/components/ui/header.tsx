import { useTransactions } from "@/src/context/transactions";
import { formatter } from "@/src/utils/formater";
import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

interface HeaderProps {
  userName: string;
}

const Header = ({ userName }: HeaderProps) => {
  const { totalIncome, totalExpense, totalBalance } = useTransactions();

  return (
    <View className="pt-16 p-8">
      <View className="">
        <Text className="text-customGreen-900 font-[PoppinsSemiBold] text-xl">
          Olá, {userName}
        </Text>
        <Text className="text-customGreen-900 font-[PoppinsRegular] text-sm">
          bem vindo de volta
        </Text>
        <View className="items-center justify-center  flex-row gap-10 mt-12">
          <View className="flex-col items-center justify-center">
            <View className="flex-row items-center gap-2">
              <Ionicons name="trending-up-outline" size={24} color="#052224" />
              <Text className="font-[PoppinsRegular] text-sm text-customGreen-900 text-center">
                Receita total
              </Text>
            </View>
            <Text className="text-customGreen-200 text-2xl font-[PoppinsBold]">
              {formatter.format(totalBalance)}
            </Text>
          </View>

          <View className="w-px h-10 bg-customGreen-300" />

          <View className="flex-col items-center justify-center">
            <View className="flex-row items-center gap-2">
              <Ionicons
                name="trending-down-outline"
                size={24}
                color="#052224"
              />
              <Text className="font-[PoppinsRegular] text-sm text-customGreen-900 text-center">
                Despesas
              </Text>
            </View>
            <Text className="text-customBlue-500 text-2xl font-[PoppinsSemiBold]">
              {"- "}
              {formatter.format(totalExpense)}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Header;
