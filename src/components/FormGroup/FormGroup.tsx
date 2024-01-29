import { Text, View } from "react-native";
import { ReactNode } from "react";

interface FormGroupProps {
  message: string;
  label: string;
  children: ReactNode;
}

const FormGroup = ({ children, message, label }: FormGroupProps) => {
  return (
    <View>
      <Text
        style={{
          marginLeft: 12,
          marginBottom: 6,
          fontFamily: "GeneralSans400",
          color: "#333",
        }}
      >
        {label}
      </Text>
      {children}
      <Text
        style={{
          marginTop: 6,
          marginBottom: 12,
          marginLeft: 12,
          fontFamily: "GeneralSans400",
          color: "#db1717",
        }}
      >
        {message && message}
      </Text>
    </View>
  );
};

export default FormGroup;
