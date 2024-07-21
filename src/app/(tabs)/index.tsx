import { getGreetingMessage } from "@/src/utils/greeting-message";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useEffect, useState } from "react";
import { Text, View, SafeAreaView, Pressable } from "react-native";

export default function Index() {
  const [greetingMessage, setGreetingMessage] = useState("");

  useEffect(() => {
    setGreetingMessage(getGreetingMessage());
  }, []);

  return (
    <SafeAreaView className="flex-1  bg-customGreen-500">
      <View className="pt-16 p-8">
        <View className="">
          <Text className="text-customGreen-900 font-[PoppinsSemiBold] text-xl">
            Olá, bem vindo de volta
          </Text>
          <Text className="text-customGreen-900 font-[PoppinsRegular] text-sm">
            {greetingMessage}
          </Text>
          <View className="items-center justify-center  flex-row gap-8 mt-12">
            <View className="">
              <View className="flex-row items-center gap-2">
                <Ionicons
                  name="trending-up-outline"
                  size={12}
                  color="#052224"
                />
                <Text className="font-[PoppinsRegular] text-xs text-customGreen-900">
                  Receita total
                </Text>
              </View>
              <Text className="text-customGreen-200 text-2xl font-[PoppinsBold]">
                $7,783.00
              </Text>
            </View>

            <View className="w-px h-10 bg-customGreen-300" />

            <View className="">
              <View className="flex-row items-center gap-2">
                <Ionicons
                  name="trending-down-outline"
                  size={12}
                  color="#052224"
                />
                <Text className="font-[PoppinsRegular] text-xs text-customGreen-900">
                  Despesas
                </Text>
              </View>
              <Text className="text-customBlue-500 text-2xl font-[PoppinsSemiBold]">
                -$1.187.40
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View className="bg-customGreen-200 flex-1 rounded-t-[40px] p-8 flex-col gap-4 pt-14 w-full relative">
        <Text>Teste</Text>
      </View>
    </SafeAreaView>
  );
}
