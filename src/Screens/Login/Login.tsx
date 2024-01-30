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
      <View>
        <Intro>
          <Welcome>Bem-vindo(a) ao</Welcome>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Waiter>WAITER</Waiter>
            <Text style={{ fontFamily: "GeneralSans400", fontSize: 24 }}>
              APP
            </Text>
          </View>
        </Intro>
        <KeyboardAvoidingView behavior="position">
          <Form>
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
              value={userData.email}
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
            <MyButton role="button">
              <ButtonText>Fazer Login</ButtonText>
            </MyButton>
          </Form>
        </KeyboardAvoidingView>
      </View>
    </Content>
  );
};

export default Login;
