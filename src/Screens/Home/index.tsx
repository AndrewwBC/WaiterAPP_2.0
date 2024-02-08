import { FlatList, Image, Text, View } from "react-native";
import { Container, Header, IconContainer, Menu } from "./styles";
import WaiterAppText from "../../components/WaiterAppText";

const DATA = [
  {
    id: "123123123123",
    image: "https://cdn-icons-png.flaticon.com/512/3132/3132693.png",
    title: "Pizzas",
  },
  {
    id: "12344423123",
    image: "https://cdn-icons-png.flaticon.com/512/3132/3132693.png",
    title: "Burguers",
  },
  {
    id: "122343123",
    image: "https://cdn-icons-png.flaticon.com/512/3132/3132693.png",
    title: "Bebidas",
  },
  {
    id: "1223431231111",
    image: "https://cdn-icons-png.flaticon.com/512/3132/3132693.png",
    title: "Cervejas",
  },
];

const Home = () => {
  return (
    <Container>
      <Header>
        <View>
          <WaiterAppText alignItems="flex-start" color="#444" />
        </View>
        <View
          style={{
            elevation: 1,
            backgroundColor: "#fff",
            borderRadius: 9999,
            padding: 8,
          }}
        >
          <Image
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfyvGIULQs0jWW67Yam6LrXcpmf_qGPOcaqA&usqp=CAU",
            }}
            style={{ width: 24, height: 24 }}
          />
        </View>
      </Header>

      <Menu>
        <FlatList
          data={DATA}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{
            flexDirection: "row",
            width: "100%",
            gap: 36,
          }}
          renderItem={({ item }) => (
            <View style={{ alignItems: "center" }}>
              <View
                style={{
                  backgroundColor: "#f9f9f9",
                  borderRadius: 999999,
                  elevation: 0.6,
                  width: 48,
                  height: 48,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image width={24} height={24} source={{ uri: item.image }} />
              </View>

              <Text
                style={{
                  fontFamily: "GeneralSans500",
                  color: "#333",
                  marginTop: 8,
                  fontSize: 14,
                }}
              >
                {item.title}
              </Text>
            </View>
          )}
        />
      </Menu>
    </Container>
  );
};

export default Home;
