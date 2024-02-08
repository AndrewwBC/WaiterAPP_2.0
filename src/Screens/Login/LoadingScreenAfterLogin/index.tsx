import { ActivityIndicator, Text, View } from "react-native";
import { Container } from "./styles";
import WaiterAppText from "../../../components/WaiterAppText";
import { StatusBar } from "expo-status-bar";

const LoadingScreenAfterLogin = () => {
  return (
    <Container>
      <StatusBar backgroundColor="#D73035" style="light" />

      <WaiterAppText color="#fff" alignItems="center" />

      <View style={{ marginVertical: 24 }}>
        <ActivityIndicator size={"large"} color={"#fff"} />
      </View>
      <View>
        <Text style={{ color: "#fff" }}>Atualizando o cardápio.</Text>
      </View>
    </Container>
  );
};

export default LoadingScreenAfterLogin;
