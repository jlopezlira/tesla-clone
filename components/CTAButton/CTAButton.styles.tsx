import styled from "styled-components";

export const Button = styled.button<{ isPrimary?: boolean }>`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.black};
`;