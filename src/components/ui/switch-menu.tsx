import { cn } from "@/src/lib/util";
import { Pressable, Text, View } from "react-native";

type Option = {
  key: number;
  label: string;
  isSelected: boolean;
  value: string;
};

interface SwitchMenuProps {
  options: Option[];
  onOptionSelected: (option: string) => void;
  className?: string;
}

const SwitchMenu = ({
  options,
  onOptionSelected,
  className,
}: SwitchMenuProps) => {
  return (
    <View className="flex-row px-4 py-2 rounded-3xl bg-customGreen-300  w-full ">
      {options.map((option) => (
        <Pressable
          key={option.key}
          className={cn(
            "flex-1 items-center justify-center px-4 py-4 rounded-2xl",
            option.isSelected ? "bg-customGreen-500" : "bg-customGreen-300",
            className
          )}
          onPress={() => onOptionSelected(option.value)}
        >
          <Text className="font-[PoppinsRegular] text-customGreen-900 text-sm">
            {option.label}
          </Text>
        </Pressable>
      ))}
    </View>
  );
};

export default SwitchMenu;
