import styled from "styled-components/native";

export const Content = styled.SafeAreaView`
  flex: 1;
  margin-top: 22px;
  background: ${({ theme }) => theme.bg};
`;

export const Intro = styled.View`
  margin: 160px 0 80px 0;
  align-items: center;
  justify-content: center;
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
  gap: 24px;
`;

export const MyButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.brand.red};
  align-items: center;
  margin-top: 24px;
  padding: 14px 28px 14px 28px;
  border-radius: 24px;
  &:disabled {
    background-color: ${({ theme }) => theme.gray.gray200};
  }
`;

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.gray.gray0};
  font-family: "GeneralSans500";
  font-size: 18px;
`;
