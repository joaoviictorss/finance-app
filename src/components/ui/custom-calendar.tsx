import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Calendar, DateData, LocaleConfig } from "react-native-calendars";
import { DayState } from "react-native-calendars/src/types";
import { Feather } from "@expo/vector-icons";

import { ptBR } from "@/src/utils/locale-calendar-config";

LocaleConfig.locales["pt-br"] = ptBR;
LocaleConfig.defaultLocale = "pt-br";

interface CustomCalendarProps {
  value: DateData | undefined;
  onChange: (value: DateData) => void;
}

const CustomCalendar = ({ value, onChange }: CustomCalendarProps) => {
  return (
    <View style={styles.container}>
      <Calendar
        style={styles.calendar}
        renderArrow={(direction: "right" | "left") => (
          <Feather size={24} color="#00D09E" name={`chevron-${direction}`} />
        )}
        headerStyle={{
          borderBottomWidth: 0,
          gap: 10,
        }}
        theme={{
          textMonthFontSize: 18,
          dayTextColor: "#052224",
          textDisabledColor: "#d9e1e8",
          selectedDayBackgroundColor: "#00D09E",
          monthTextColor: "#00D09E",
          selectedDayTextColor: "#052224",
          textSectionTitleColor: "#3299FF",
          calendarBackground: "transparent",
          textDayStyle: { color: "#052224", fontSize: 14 },
          arrowStyle: {
            margin: 0,
            padding: 0,
          },
        }}
        maxDate={new Date().toDateString()}
        hideExtraDays
        onDayPress={onChange}
        dayComponent={({
          date,
          state,
        }: {
          date: DateData;
          state: DayState;
        }) => {
          return (
            <TouchableOpacity
              style={[
                styles.day,
                date.dateString === value?.dateString && styles.daySelected,
              ]}
              onPress={() => onChange(date)}
            >
              <Text
                style={[
                  styles.dayText,
                  (state === "inactive" || state === "disabled") &&
                    styles.disabled,
                  state === "today" && styles.today,
                  date.dateString === value?.dateString && styles.dayText,
                ]}
              >
                {date.day}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default CustomCalendar;

const styles = StyleSheet.create({
  container: {
    height: 380,
    padding: 24,
  },
  calendar: {
    backgroundColor: "transparent",
    color: "red",
  },
  selected: {
    color: "#fff",
    fontSize: 16,
    marginTop: 42,
  },
  dayText: {
    color: "#052224",
    fontWeight: "bold",
  },
  day: {
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 7,
  },
  disabled: {
    color: "#717171",
  },
  today: {},
  daySelected: {
    backgroundColor: "#00D09E",
  },
});
