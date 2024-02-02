import { KeyboardType, Text, TextInput, View } from "react-native";
import { ReactNode } from "react";
import { Container, Input } from "./styles";

interface FormGroupProps {
  errorMessage: string;
  label: string;
  placeholder: string;
  keyboardType?: KeyboardType;
  value: string;
  isPasswordInput?: boolean;
  onChange?: (event: any) => void;
  onEndEditing?: (event: any) => void;
  onFocus?: (event: any) => void;
}

const FormGroup = ({
  errorMessage,
  label,
  placeholder,
  keyboardType,
  value,
  isPasswordInput,
  onChange,
  onFocus,
  onEndEditing,
}: FormGroupProps) => {
  return (
    <Container>
      <Text
        style={{
          color: errorMessage ? "#db1717" : "#333",
          marginLeft: 12,
          marginBottom: 6,
          fontFamily: "GeneralSans400",
        }}
      >
        {label}
      </Text>
      <Input
        placeholder={placeholder}
        keyboardType={keyboardType}
        value={value}
        secureTextEntry={isPasswordInput}
        onChangeText={onChange}
        errorMessage={errorMessage}
        onEndEditing={onEndEditing}
        onFocus={onFocus}
      />

      {errorMessage && (
        <Text
          style={{
            marginTop: 2,
            marginBottom: 0,
            marginLeft: 12,
            fontFamily: "GeneralSans400",
            color: "#db1717",
          }}
        >
          {errorMessage}
        </Text>
      )}
    </Container>
  );
};

export default FormGroup;
