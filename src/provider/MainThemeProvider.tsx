import { PropsWithChildren } from 'react'
import { GlobalStyles } from 'plc-shared/styles'
import { CssBaseline, ThemeProvider } from '@mui/material'
import theme from '../style/theme'

export const MainThemeProvider = ({ children }: PropsWithChildren<any>) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
