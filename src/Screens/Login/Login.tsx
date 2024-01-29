import {
  KeyboardAvoidingView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Content, Form, Intro, Waiter, Welcome } from "./styles";
import FormGroup from "../../components/FormGroup/FormGroup";
import { Input } from "../../input";
import { useState } from "react";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState("asdasd");

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
            <FormGroup label="E-mail" message={errorMessage}>
              <Input
                aria-label="input"
                message={errorMessage}
                onChange={() => setErrorMessage("Oi")}
                keyboardType="email-address"
              />
            </FormGroup>
            <FormGroup label="Senha" message={errorMessage}>
              <Input
                aria-label="input"
                message={errorMessage}
                onChange={() => setErrorMessage("Oi")}
                keyboardType="visible-password"
              />
            </FormGroup>
            <TouchableOpacity>
              <Text>Entrar</Text>
            </TouchableOpacity>
          </Form>
        </KeyboardAvoidingView>
      </View>
    </Content>
  );
};

export default Login;
