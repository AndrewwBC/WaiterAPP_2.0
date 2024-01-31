import styled from "styled-components/native";

export const Content = styled.SafeAreaView`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-content: center;
  margin-top: 22px;
  background: ${({ theme }) => theme.bg};
  background-color: blue;
`;

export const Intro = styled.View`
  margin: 160px 0;
  align-items: center;
  justify-content: center;
  background-color: red;
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
  background-color: green;
  justify-content: space-between;
  background-color: red;
`;

export const MyButton = styled.TouchableOpacity`
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.gray.gray200 : theme.brand.red};
  align-items: center;
  padding: 14px 28px 14px 28px;
  margin-top: 60px;
  border-radius: 24px;
`;

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.gray.gray0};
  font-family: "GeneralSans500";
  font-size: 18px;
`;
