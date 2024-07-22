import { TextInput, TextInputProps } from "react-native";
import InputContainer from "./input-container";

interface CustomTextInputProps extends TextInputProps {
  label: string;
  placeholder: string;
}

const CustomTextInput = ({
  label,
  placeholder,
  ...props
}: CustomTextInputProps) => {
  return (
    <InputContainer label={label}>
      <TextInput
        placeholder={placeholder}
        className="text-customGreen-900 ml-4 font-[PoppinsMedium] flex-1"
        {...props}
      />
    </InputContainer>
  );
};

export default CustomTextInput;
