import { useCallback, useEffect, useState } from "react";

import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/assets/css/theme";

import { StatusBar } from "expo-status-bar";
import { loadAsync, useFonts } from "expo-font";

import MySplashScreen from "./src/Screens/MySplashScreen/MySplashScreen";

import Login from "./src/Screens/Login/Login";

export default function App() {
  const [isFontsLoaded] = useFonts({
    GeneralSans400: require("./src/assets/fonts/GeneralSans-Regular.otf"),
    GeneralSans500: require("./src/assets/fonts/GeneralSans-Semibold.otf"),
    GeneralSans600: require("./src/assets/fonts/GeneralSans-Bold.otf"),
  });

  if (!isFontsLoaded) {
    return (
      <ThemeProvider theme={theme}>
        <MySplashScreen />
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar animated={true} backgroundColor="black" style="inverted" />
      <Login />
    </ThemeProvider>
  );
}
