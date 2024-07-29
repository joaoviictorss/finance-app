import { useState } from "react";
import { Switch } from "react-native";

const CustomSwitch = () => {
  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <Switch
      trackColor={{ false: "#089977", true: "#00D09E" }}
      thumbColor={isEnabled ? "#FFFFFF" : "#ffffff"}
      ios_backgroundColor="#3e3e3e"
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  );
};

export default CustomSwitch;
