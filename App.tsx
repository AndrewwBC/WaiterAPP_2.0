import { Text } from "react-native";
import Login from "./src/Screens/Login/Login";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/assets/css/theme";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [isFontsLoaded] = useFonts({
    GeneralSans400: require("./src/assets/fonts/GeneralSans-Regular.otf"),
    GeneralSans500: require("./src/assets/fonts/GeneralSans-Semibold.otf"),
    GeneralSans600: require("./src/assets/fonts/GeneralSans-Bold.otf"),
  });

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hideAsync();
    }, 1000);
  });

  if (!isFontsLoaded) {
    return <Text>Oi</Text>;
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar animated={true} backgroundColor="black" style="inverted" />
      <Login></Login>
    </ThemeProvider>
  );
}
