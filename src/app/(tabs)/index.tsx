import Chart from "@/src/components/chart";
import Header from "@/src/components/ui/header";
import SwitchMenu from "@/src/components/ui/switch-menu";
import { useSession } from "@/src/context/ctx";
import { Redirect } from "expo-router";

import { useState } from "react";
import { View, SafeAreaView, Text } from "react-native";

export default function Index() {
  const { session, isLoading } = useSession();

  const userInfo = JSON.parse(session!);

  const [selectedOption, setSelectedOption] = useState("Dia");
  const options = [
    {
      key: 1,
      label: "Dia",
      isSelected: selectedOption === "Dia",
    },
    {
      key: 2,
      label: "Semana",
      isSelected: selectedOption === "Semana",
    },
    {
      key: 3,
      label: "Mês",
      isSelected: selectedOption === "Mês",
    },
    {
      key: 4,
      label: "Ano",
      isSelected: selectedOption === "Ano",
    },
  ];

  return (
    <SafeAreaView className="flex-1  bg-customGreen-500">
      <Header userName={userInfo.full_name.split(" ")[0]} />
      <View className="bg-customGreen-200 flex-1 rounded-t-[40px] p-4 flex-col gap-4 pt-8 w-full">
        <View>
          <SwitchMenu onOptionSelected={setSelectedOption} options={options} />
        </View>
        <Chart option={selectedOption}/>
      </View>
    </SafeAreaView>
  );
}
