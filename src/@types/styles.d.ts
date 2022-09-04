import 'styled-component'
import { theme } from '../styles/theme'

declare module 'styled-components' {
  type ThemeType = typeof theme

  export interface DefaultTheme extends ThemeType {}
}
