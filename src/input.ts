import styled from "styled-components/native";

export const Input = styled.TextInput`
  padding: 8px 16px 8px 16px;
  border: 1px solid ${({ theme }) => theme.gray.gray200};
  border-radius: 8px;
  border-color: ${({ message }) => message && "red !important"};
`;
