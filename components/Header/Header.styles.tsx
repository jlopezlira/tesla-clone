import styled from 'styled-components';

export const Header = styled.div<{ isHome?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: ${({ isHome }) => (isHome ? 'space-around' : 'space-between')};
  & div {
    display: flex;
  }
  padding: ${({ isHome }) => (isHome ? '0px' : '0 3rem')};
`;

export const Link = styled.a`
  font-weight: 500;
  padding: 10px 15px;
  color: ${({ theme }) => theme.colors.grey10};
  font-size: 16px;
  cursor: pointer;

  &:hover {
    text-decoration: none;
    background-color: ${({ theme }) => theme.colors.transparent};
    border-radius: 10px;
  }
`;
