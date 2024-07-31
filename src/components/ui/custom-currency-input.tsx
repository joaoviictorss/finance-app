import { Text, View } from "react-native";
import CurrencyInput from "react-native-currency-input";

interface CustomCurrencyInputProps {
  value: number | null;
  changeValue: (value: number | null) => void;
}

const CustomCurrencyInput = ({
  value,
  changeValue,
}: CustomCurrencyInputProps) => {
  return (
    <View className="flex-col gap-1.5">
      <Text className="px-6 font-[PoppinsMedium] text-customGreen-900">
        Valor
      </Text>

      <View className="bg-customGreen-300 rounded-[30px] px-4 py-2 justify-between flex-row items-center">
        <CurrencyInput
          className="text-customGreen-900 ml-4 font-[PoppinsMedium] flex-1"
          value={value}
          onChangeValue={changeValue}
          prefix="R$"
          delimiter="."
          separator=","
          precision={2}
          minValue={0}
          placeholder="R$0,00"
        />
      </View>
    </View>
  );
};

export default CustomCurrencyInput;
