import { TextInputProps } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.View``;

interface InputTypes extends TextInputProps {
  errorMessage: string | boolean;
}

export const Input: React.FC<InputTypes> = styled.TextInput`
  padding: 10px 16px 10px 16px;
  border: 1px solid ${({ theme }) => theme.gray.gray200};
  border-radius: 8px;
  border-color: ${({ errorMessage }) => (errorMessage ? "#db1717" : "#999")};
`;
