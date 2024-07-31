import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useNavigation, useRouter } from "expo-router";
import { Pressable, SafeAreaView, Text, ScrollView, View } from "react-native";
import CustomTextInput from "@/src/components/ui/custom-text-input";
import DateInput from "@/src/components/ui/date-input";
import { useState } from "react";
import SelectInput from "@/src/components/ui/select-input";
import CustomCurrencyInput from "@/src/components/ui/custom-currency-input";
import SwitchMenu from "@/src/components/ui/switch-menu";
import Button from "@/src/components/ui/button";
import { useSession } from "@/src/context/ctx";
import { createTransaction, typeOptions } from "@/src/utils/transactions";

const Categories = () => {
  const navigation = useNavigation();
  const router = useRouter();
  const { session, isLoading } = useSession();
  const userInfo = JSON.parse(session!);
  const [selectedOption, setSelectedOption] = useState("deposit");
  const options = [
    {
      key: 1,
      label: "Entrada",
      value: "deposit",
      isSelected: selectedOption === "deposit",
    },
    {
      key: 2,
      label: "Saída",
      value: "withdraw",
      isSelected: selectedOption === "withdraw",
    },
  ];

  const [date, setDate] = useState(new Date());
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState<number | null>(null);
  const [description, setDescription] = useState("");

  const onSubmit = async () => {
    createTransaction({
      user_id: userInfo.id,
      amount: amount!,
      description,
      created_at: date,
      category_name: category,
      type: selectedOption,
    });

    router.replace("/transactions");

    setSelectedOption("deposit");
    setDate(new Date());
    setCategory("");
    setAmount(null);
    setDescription("");
  };

  const allFieldsAreFilled = !!date && !!category && !!amount && !!description;

  return (
    <SafeAreaView className="flex-1 bg-customGreen-500 ">
      <View className="pt-16 p-8">
        <View className="flex-row items-center justify-between">
          <Pressable onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back-outline" size={24} color="#f1fff3" />
          </Pressable>
          <Text className="text-customGreen-900 font-[PoppinsSemiBold] text-xl">
            Criar Transação
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
      <ScrollView className="bg-customGreen-200 flex-1 rounded-t-[40px] p-8 flex-col gap-4 pt-2 w-full mt-10 z-20">
        <View className="mt-8 flex-col gap-6 h-full mb-40">
          <DateInput value={date} changeValue={setDate} />
          <SelectInput value={category} changeValue={setCategory} />
          <CustomCurrencyInput value={amount} changeValue={setAmount} />
          <CustomTextInput
            label="Titulo"
            placeholder="Transporte..."
            value={description}
            onChangeText={setDescription}
          />

          <View className="flex-col gap-1.5">
            <Text className="px-6 font-[PoppinsMedium] text-customGreen-900">
              Tipo de Transação
            </Text>
            <SwitchMenu
              options={options}
              onOptionSelected={setSelectedOption}
              className="py-2 rounded-xl"
            />
          </View>

          <View className="items-center justify-center mt-4">
            <Button
              variant="secondary"
              disabled={!allFieldsAreFilled}
              onPress={onSubmit}
            >
              <Text className="text-customGreen-900 font-[PoppinsMedium] text-base">
                Salvar
              </Text>
            </Button>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Categories;
