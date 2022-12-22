import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'

const theme = createTheme({
  palette: {
    primary: {
      main: '#335b8a'
    },
    secondary: {
      main: '#0205d1'
    },
    warning: {
      main: '#fffb48'
    },
    white: {
      main: '#fff'
    },
    opaquePrimary: {
      main: '#00325d'
    },
    yellow: {
      main: '#ffd800'
    },
    background: {
      default: '#fafafa',
      paper: '#fff'
    },
    border: {
      main: '#e0e0e0'
    },
    fieldOutlined: {
      main: '#757575'
    },
    error: {
      main: red.A400
    }
  }
})

export default theme
