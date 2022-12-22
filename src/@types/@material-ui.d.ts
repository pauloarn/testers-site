import '@mui/material'

declare module '@mui/material/styles' {
  interface Palette {
    white: Palette['primary']
    opaquePrimary: Palette['primary']
    yellow: Palette['primary']
    border: Palette['primary']
    fieldOutlined: Palette['primary']
  }

  interface PaletteOptions {
    white: PaletteOptions['primary']
    opaquePrimary: PaletteOptions['primary']
    yellow: PaletteOptions['primary']
    border: PaletteOptions['primary']
    fieldOutlined: PaletteOptions['primary']
  }
}
