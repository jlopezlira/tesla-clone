import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

const StyledLayout = styled.div`
  width: 1000px;
  margin: 0 auto;
  padding: 2rem;
`;

type Props = {
  children?: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return <StyledLayout>{children}</StyledLayout>;
};

export default Layout;
