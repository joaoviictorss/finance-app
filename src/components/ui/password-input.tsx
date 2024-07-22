import { Pressable, TextInput, TextInputProps } from "react-native";
import InputContainer from "./input-container";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

interface PasswordInputProps extends TextInputProps {
  label: string;
}

const PasswordInput = ({ label, ...props }: PasswordInputProps) => {
  const [isHidePassword, setIsHidePassword] = useState(true);

  const togglePasswordVisibility = () => {
    setIsHidePassword(!isHidePassword);
  };

  return (
    <InputContainer label={label}>
      <TextInput
        placeholder="● ● ● ● ● ● ● ●"
        className="text-customGreen-900 ml-4 font-[PoppinsMedium] flex-1"
        secureTextEntry={isHidePassword}
        {...props}
      />
      <Pressable onPress={togglePasswordVisibility}>
        <Ionicons
          name={isHidePassword ? "eye-off" : "eye"}
          size={24}
          color="black"
        />
      </Pressable>
    </InputContainer>
  );
};

export default PasswordInput;
