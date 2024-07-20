import { Text, TextInput, View } from "react-native";

interface InputContainerProps {
  label: string;
  children: React.ReactNode;
}

const InputContainer = ({ label, children }: InputContainerProps) => {
  return (
    <View className="flex-col gap-1.5">
      <Text className="px-6 font-[PoppinsMedium] text-customGreen-900">
        {label}
      </Text>

      <View className="bg-customGreen-300 rounded-[30px] px-6 py-3 justify-between flex-row items-center">
        {children}
      </View>
    </View>
  );
};

export default InputContainer;
