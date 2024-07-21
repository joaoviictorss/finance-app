import { Text } from "react-native";
import { Redirect, Stack } from "expo-router";

import { useSession } from "../../context/ctx";
import NavBar from "@/src/components/navigation/navbar";

export default function AppLayout() {
  const { session, isLoading } = useSession();

  if (isLoading) {
    return <Text>Carregando...</Text>;
  }

  if (!session) {
    return <Redirect href="/sign-in" />;
  }

  return <NavBar />;
}
