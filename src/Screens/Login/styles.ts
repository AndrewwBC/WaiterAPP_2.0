import styled from "styled-components/native";

export const Content = styled.SafeAreaView`
  flex: 1;
  margin-top: 22px;
`;

export const Intro = styled.View`
  margin: 160px 0 80px 0;
  align-items: center;
  justify-content: center;
`;

export const Welcome = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.gray.gray200};
`;

export const Waiter = styled.Text`
  font-size: 24px;
  font-family: "GeneralSans600";
  color: ${({ theme }) => theme.gray.gray500};
`;

export const Form = styled.View`
  margin: 0px 24px;
`;
