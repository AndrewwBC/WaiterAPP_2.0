import { Text, View } from "react-native";

const WaiterAppText = () => {
  return (
    <View>
      <Text
        style={{ fontFamily: "GeneralSans600", fontSize: 24, color: "#444" }}
      >
        WAITER
        <Text
          style={{ fontFamily: "GeneralSans400", fontSize: 24, color: "#444" }}
        >
          APP
        </Text>
      </Text>
    </View>
  );
};

export default WaiterAppText;
