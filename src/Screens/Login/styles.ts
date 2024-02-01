import { ViewProps } from "react-native";
import styled from "styled-components/native";

export const Content = styled.SafeAreaView`
  margin-top: 22px;
  background: ${({ theme }) => theme.bg};
  flex-grow: 1;
`;

interface IntroProps extends ViewProps {
  keyboardState: boolean;
}

export const Intro: React.FC<IntroProps> = styled.View`
  margin: ${({ keyboardState }) =>
    keyboardState ? "80px 0 48px 0" : "160px 0 120px 0"};
  align-items: center;
`;

export const Welcome = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.gray.gray500};
`;

export const Waiter = styled.Text`
  font-size: 24px;
  font-family: "GeneralSans600";
  color: ${({ theme }) => theme.gray.gray500};
`;

export const Form = styled.View`
  margin: 0px 24px;
  justify-content: space-between;
  flex-grow: 1;
`;

export const MyButton = styled.TouchableOpacity`
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.gray.gray200 : theme.brand.red};
  align-items: center;
  padding: 14px 28px 14px 28px;
  margin: 24px 0;
  justify-self: flex-end;
  border-radius: 24px;
`;

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.gray.gray0};
  font-family: "GeneralSans500";
  font-size: 18px;
`;
