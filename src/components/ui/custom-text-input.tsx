import { TextInput, TextInputProps } from "react-native";
import InputContainer from "./input-container";
import { cn } from "@/src/lib/util";

interface CustomTextInputProps extends TextInputProps {
  label?: string;
  placeholder: string;
  className?: string;
}

const CustomTextInput = ({
  label,
  placeholder,
  className,
  ...props
}: CustomTextInputProps) => {
  return (
    <InputContainer label={label}>
      <TextInput
        placeholder={placeholder}
        className={cn(
          "text-customGreen-900 ml-4 font-[PoppinsMedium] flex-1",
          className
        )}
        {...props}
      />
    </InputContainer>
  );
};

export default CustomTextInput;
