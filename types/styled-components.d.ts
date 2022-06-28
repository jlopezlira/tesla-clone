import theme from '../styles';

type Theme = typeof theme.lightTheme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
