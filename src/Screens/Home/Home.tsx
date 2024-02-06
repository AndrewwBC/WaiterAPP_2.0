import { Image, Text, View } from "react-native";
import { Container, Header, IconContainer } from "./styles";
import WaiterAppText from "../../components/WaiterAppText";

const Home = () => {
  return (
    <Container>
      <Header>
        <View>
          <Text
            style={{
              color: "#333",
              fontFamily: "GeneralSans400",
              marginBottom: 4,
            }}
          >
            Bem-vindo(a) ao
          </Text>
          <WaiterAppText />
        </View>
        <IconContainer>
          <Image
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfyvGIULQs0jWW67Yam6LrXcpmf_qGPOcaqA&usqp=CAU",
            }}
            style={{ width: 24, height: 24 }}
          />
        </IconContainer>
      </Header>
    </Container>
  );
};

export default Home;
