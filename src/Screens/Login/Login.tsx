import {
  KeyboardAvoidingView,
  NativeSyntheticEvent,
  Text,
  TextInputAndroidProps,
  TextInputChangeEventData,
  TouchableOpacity,
  View,
} from "react-native";
import {
  ButtonText,
  Content,
  Form,
  Intro,
  MyButton,
  Waiter,
  Welcome,
} from "./styles";
import FormGroup from "../../components/FormGroup/FormGroup";
import { FormEvent, useState } from "react";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  return (
    <Content>
      <Intro>
        <Welcome>Bem-vindo(a) ao</Welcome>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Waiter>WAITER</Waiter>
          <Text style={{ fontFamily: "GeneralSans400", fontSize: 24 }}>
            APP
          </Text>
        </View>
      </Intro>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="position">
        <Form>
          <View style={{ gap: 24 }}>
            <FormGroup
              label="E-mail"
              errorMessage={errorMessage}
              keyboardType="email-address"
              placeholder="Seu email de acesso"
              value={userData.email}
              onChange={(
                event: NativeSyntheticEvent<TextInputChangeEventData>
              ) =>
                setUserData((prevState) => ({
                  ...prevState,
                  email: event.nativeEvent.text,
                }))
              }
            />
            <FormGroup
              label="Senha"
              errorMessage={errorMessage}
              keyboardType="email-address"
              placeholder="Insira a sua senha"
              value={userData.password}
              isPasswordInput={true}
              onChange={(
                event: NativeSyntheticEvent<TextInputChangeEventData>
              ) =>
                setUserData((prevState) => ({
                  ...prevState,
                  password: event.nativeEvent.text,
                }))
              }
            />
          </View>
          <MyButton aria-label="button" disabled={true} role="button">
            <ButtonText>Fazer Login</ButtonText>
          </MyButton>
        </Form>
      </KeyboardAvoidingView>
    </Content>
  );
};

export default Login;
