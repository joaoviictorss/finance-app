import { Image } from "expo-image";
import { useState } from "react";
import { Pressable, Text, View } from "react-native";

import RNDateTimePicker from "@react-native-community/datetimepicker";

interface DateTimePickerProps {
  value: Date;
  changeValue: (value: Date) => void;
}

type Mode = "date" | "time" | "datetime" | "countdown";

const DateInput = ({ value, changeValue }: DateTimePickerProps) => {
  const [mode, setMode] = useState<Mode>("date");
  const [openDatePicker, setOpenDatePicker] = useState(false);

  const handleCloseDatePicker = () => {
    setOpenDatePicker(false);
  };

  const showMode = (modeToShow: Mode) => {
    setOpenDatePicker(true);
    setMode(modeToShow);
  };

  return (
    <View className="flex-col gap-1.5">
      <Text className="px-6 font-[PoppinsMedium] text-customGreen-900">
        Data
      </Text>

      <View className="bg-customGreen-300 rounded-[30px] px-4 py-2 justify-between flex-row items-center">
        <View className="text-customGreen-900 ml-4 font-[PoppinsMedium] flex-1 flex-row items-center justify-between">
          <Text className="font-[PoppinsMedium] text-base text-customGreen-900">
            {value?.toLocaleString("pt-BR", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            })}
          </Text>
          <View className="flex-row items-center gap-2">
            <Pressable
              className="bg-customGreen-500 rounded-xl p-1 items-center justify-center"
              onPress={() => showMode("date")}
            >
              <Image
                source={require("@/src/assets/icons/calendar.svg")}
                style={{ width: 20, height: 20 }}
                contentFit="contain"
              />
            </Pressable>

            <Pressable
              className="bg-customGreen-500 rounded-xl p-1 items-center justify-center"
              onPress={() => showMode("time")}
            >
              <Image
                source={require("@/src/assets/icons/clock.svg")}
                style={{ width: 20, height: 20 }}
                contentFit="contain"
              />
            </Pressable>
          </View>
        </View>
      </View>
      {openDatePicker && (
        <RNDateTimePicker
          value={value}
          display="default"
          mode={mode}
          maximumDate={new Date()}
          onChange={(event, date) => {
            if (date) {
              changeValue(date);
            }
            handleCloseDatePicker();
          }}
        />
      )}
    </View>
  );
};

export default DateInput;
