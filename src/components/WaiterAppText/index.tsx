import { FlexAlignType, Text, View } from "react-native";

interface WaiterAppTextProps {
  color?: string;
  alignItems: FlexAlignType;
}

const WaiterAppText = ({ color, alignItems }: WaiterAppTextProps) => {
  return (
    <View style={{ alignItems: alignItems }}>
      <Text
        style={{ color: color, fontFamily: "GeneralSans400", marginBottom: 4 }}
      >
        Bem-vindo(a) ao
      </Text>
      <Text
        style={{ fontFamily: "GeneralSans600", fontSize: 24, color: color }}
      >
        WAITER
        <Text
          style={{ fontFamily: "GeneralSans400", fontSize: 24, color: color }}
        >
          APP
        </Text>
      </Text>
    </View>
  );
};

export default WaiterAppText;
