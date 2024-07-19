import { Slot } from "expo-router";
import { SessionProvider } from "../context/ctx";
import "./global.css";

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import {
  Poppins_100Thin,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

import { useEffect, useState } from "react";

export default function Root() {
  const [loaded, error] = useFonts({
    PoppinsThin: Poppins_100Thin,
    PoppinsLight: Poppins_300Light,
    PoppinsRegular: Poppins_400Regular,
    PoppinsMedium: Poppins_500Medium,
    PoppinsSemiBold: Poppins_600SemiBold,
    PoppinsBold: Poppins_700Bold,
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <SessionProvider>
      <Slot />
    </SessionProvider>
  );
}
