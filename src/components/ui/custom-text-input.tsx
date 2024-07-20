import { TextInput } from "react-native";
import InputContainer from "./input-container";
import { Ionicons } from "@expo/vector-icons";

interface CustomTextInputProps {
  label: string;
  placeholder: string;
}

const CustomTextInput = ({ label, placeholder }: CustomTextInputProps) => {
  return (
    <InputContainer label={label}>
      <TextInput
        placeholder={placeholder}
        className="text-customGreen-900 ml-4 font-[PoppinsMedium] flex-1"
      />
    </InputContainer>
  );
};

export default CustomTextInput;
