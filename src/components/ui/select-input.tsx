import { Image } from "expo-image";
import { useState } from "react";
import { Pressable, Text, View } from "react-native";

interface SelectInputProps {
  value: string;
  changeValue: (value: string) => void;
}

const options = [
  {
    label: "Salário",
    value: "salary",
  },
  {
    label: "Presente",
    value: "gift",
  },
  {
    label: "Mercado",
    value: "market",
  },
  {
    label: "Saldo",
    value: "savings",
  },
  {
    label: "Transporte",
    value: "transport",
  },
  {
    label: "Aluguel",
    value: "rent",
  },
  {
    label: "Medicamentos",
    value: "medicine",
  },
  {
    label: "Comida",
    value: "food",
  },
  {
    label: "Entretenimento",
    value: "entrertainment",
  },
  {
    label: "Outros",
    value: "other",
  },
];

const SelectInput = ({ value, changeValue }: SelectInputProps) => {
  const [isOpenSelect, setIsOpenSelect] = useState(false);

  const handleOpenSelect = () => {
    setIsOpenSelect((prev) => !prev);
  };

  return (
    <View className="flex-col gap-1.5">
      <Text className="px-6 font-[PoppinsMedium] text-customGreen-900">
        Categoria
      </Text>
      <Pressable
        onPress={handleOpenSelect}
        className="bg-customGreen-300 rounded-[30px] px-4 py-2 justify-between flex-row items-center"
      >
        {value ? (
          <Text className="p-1 font-[PoppinsMedium] text-base text-customGreen-900 px-4">
            {options.find((option) => option.value === value)?.label}
          </Text>
        ) : (
          <Text className="p-1 font-[PoppinsRegular] text-base text-customGreen-900/70 px-4">
            Selecione a categoria
          </Text>
        )}
        <Pressable>
          <Image
            source={
              isOpenSelect
                ? require("@/src/assets/icons/arrow-up.svg")
                : require("@/src/assets/icons/arrow-down.svg")
            }
            style={{ width: 16, height: 16 }}
            contentFit="contain"
          />
        </Pressable>
      </Pressable>
      {isOpenSelect && (
        <View className="rounded-[30px] bg-customGreen-300 p-4 mt-2 absolute top-full left-0 right-0 z-10">
          {options.map((option) => (
            <Pressable
              className="flex-row items-center justify-between px-4 py-2 gap-2"
              key={option.value}
              onPress={() => {
                changeValue(option.value);
                setIsOpenSelect(false);
              }}
            >
              <Text className="font-[PoppinsMedium] text-base text-customGreen-900">
                {option.label}
              </Text>
            </Pressable>
          ))}
        </View>
      )}
    </View>
  );
};

export default SelectInput;
