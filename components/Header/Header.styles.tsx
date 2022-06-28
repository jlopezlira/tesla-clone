import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  & div {
    display: flex;
  }
`;

export const Link = styled.a`
  font-weight: 600;
  padding: 10px 15px;
  color: ${({theme}) => theme.colors.grey10};
  font-size: 16px;
  cursor: pointer;

  &:hover {
    text-decoration: none;
    background-color: ${({theme}) => theme.colors.transparent};;
    border-radius: 10px;
  }
`;
