import { isEmailValid } from "../../utils/isEmailValid";
import {
  Keyboard,
  KeyboardAvoidingView,
  NativeSyntheticEvent,
  Text,
  TextInputChangeEventData,
  TextInputEndEditingEventData,
  TextInputTextInputEventData,
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
import { ChangeEvent, FormEvent, useState } from "react";

const Login = () => {
  const [errors, setErrors] = useState([
    {
      field: "",
      message: "",
    },
  ]);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [keyboard, setKeyboard] = useState(false);
  Keyboard.addListener("keyboardDidShow", () => setKeyboard(true));
  Keyboard.addListener("keyboardDidHide", () => setKeyboard(false));

  function handleEmailEndEditing(
    event: NativeSyntheticEvent<TextInputEndEditingEventData>
  ) {
    const typedEmail = event.nativeEvent.text;
    console.log(typedEmail);

    const errorAlreadyExists = errors.find((error) => error.field === "email");

    console.log(!isEmailValid(typedEmail));
    if (!isEmailValid(typedEmail) && !errorAlreadyExists) {
      setErrors((prevState) => [
        {
          ...prevState,
          field: "email",
          message: "Email inválido",
        },
      ]);
    }

    if (isEmailValid(typedEmail)) {
      setErrors(errors.filter((erro) => erro.field !== "email"));
    }
  }

  function handlePasswordChange(
    event: NativeSyntheticEvent<TextInputChangeEventData>
  ) {
    const typedPassword = event.nativeEvent.text;

    const errorAlreadyExists = errors.find((erro) => erro.field === "password");

    setUserData((prevState) => ({
      ...prevState,
      password: typedPassword,
    }));

    if (typedPassword.length < 8 && !errorAlreadyExists) {
      setErrors((prevState) => [
        {
          ...prevState,
          field: "password",
          message: "A senha deve ter o mínimo de 8 caractéres",
        },
      ]);
    }
    if (typedPassword.length >= 8) {
      setErrors(errors.filter((erro) => erro.field !== "password"));
    }
  }

  function findErrorByFieldName(fieldName: string) {
    const errorMessage = errors.find(
      (error) => error.field === fieldName
    )?.message;

    return errorMessage || "";
  }

  return (
    <Content>
      <Intro keyboardState={keyboard}>
        <Welcome>Bem-vindo(a) ao</Welcome>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Waiter>WAITER</Waiter>
          <Text style={{ fontFamily: "GeneralSans400", fontSize: 24 }}>
            APP
          </Text>
        </View>
      </Intro>
      <KeyboardAvoidingView style={{ flexGrow: 1 }} behavior="height">
        <Form>
          <View style={{ gap: 24 }}>
            <FormGroup
              label="E-mail"
              errorMessage={findErrorByFieldName("email")}
              keyboardType="email-address"
              placeholder="Seu email de acesso"
              value={userData.email}
              onChange={(event: TextInputTextInputEventData) =>
                setUserData((prevState) => ({
                  ...prevState,
                  email: event.text,
                }))
              }
              onEndEditing={handleEmailEndEditing}
            />
            <FormGroup
              label="Senha"
              errorMessage={findErrorByFieldName("password")}
              placeholder="Insira a sua senha"
              isPasswordInput={true}
              value={userData.password}
              onChange={handlePasswordChange}
            />
          </View>
          <MyButton aria-label="button" disabled={false} role="button">
            <ButtonText>Fazer Login</ButtonText>
          </MyButton>
        </Form>
      </KeyboardAvoidingView>
    </Content>
  );
};

export default Login;
