import CustomSwitch from "@/src/components/ui/switch";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useNavigation } from "expo-router";
import { Pressable, SafeAreaView, Text, View } from "react-native";

const SettingsPage = () => {
  const navigation = useNavigation();

  const options = [
    "Notificação Geral",
    "Som",
    "Vibração",
    "Notificações de Atualizações",
    "Lembrete de despesas",
    "Notificações de orçamento",
    "Alertas de saldo baixo",
  ];

  return (
    <SafeAreaView className="flex-1 bg-customGreen-500 ">
      <View className="pt-16 p-8">
        <View className="flex-row items-center justify-between">
          <Pressable onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back-outline" size={24} color="#f1fff3" />
          </Pressable>
          <Text className="text-customGreen-900 font-[PoppinsSemiBold] text-xl">
            Configurações
          </Text>
          <Pressable className="bg-customGreen-200 rounded-full p-2 items-center justify-center">
            <Image
              source={require("../../../assets/icons/bell.svg")}
              style={{ width: 20, height: 20 }}
              contentFit="contain"
              tintColor={"#031314"}
            />
          </Pressable>
        </View>
      </View>
      <View className="bg-customGreen-200 flex-1 rounded-t-[40px] p-8 flex-col gap-4 pt-2 w-full">
        <View className="mt-20">
          {options.map((option, index) => (
            <View
              key={index}
              className="flex-row items-center justify-between mb-4"
            >
              <Text className="text-customGreen-900 font-[PoppinsMedium] text-base">
                {option}
              </Text>
              <CustomSwitch />
            </View>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SettingsPage;
