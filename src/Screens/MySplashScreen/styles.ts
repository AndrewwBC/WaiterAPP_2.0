import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.brand.red};
`;

export const TextContainer = styled.View`
  align-items: center;
`;

export const WaiterText = styled.Text`
  font-size: 32px;
  margin-top: 24px;
  font-weight: 600;
  color: ${({ theme }) => theme.gray.gray0};
  font-family: "GeneralSans600";
`;

export const SubTitle = styled.Text`
  margin-top: 6px;
  font-size: 16px;
  color: ${({ theme }) => theme.gray.gray0};
  font-family: "GeneralSans400";
`;
