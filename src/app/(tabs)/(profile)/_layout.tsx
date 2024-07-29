import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ headerShown: false }} />
      <Tabs.Screen name="settings" options={{ headerShown: false }} />
      <Tabs.Screen name="user-config" options={{ headerShown: false }} />
    </Tabs>
  );
}
