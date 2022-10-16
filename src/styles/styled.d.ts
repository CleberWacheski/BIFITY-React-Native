import 'styled-components';
import { DARK_THEME } from '.';


declare module 'styled-components' {
  type ThemeType = typeof DARK_THEME ;

  export interface DefaultTheme extends ThemeType { }
}