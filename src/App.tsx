import { Provider as ReduxProvider } from 'react-redux'
import { MainThemeProvider } from './provider/MainThemeProvider'
import store from './redux/store'
import { CustomSnackbarProvider } from 'plc-shared/components/CustomSnackbar'
import { RouterBuild } from '@modules/RouterBuild'
import { useStartupSystem } from '@hooks/useStartupSystem'
import { AuthProvider } from '@modules/Autenticacao'
import './mock'

export const App = () => {
  useStartupSystem()

  return (
    <ReduxProvider store={store}>
      <MainThemeProvider>
        <CustomSnackbarProvider>
          <AuthProvider>
            <RouterBuild />
          </AuthProvider>
        </CustomSnackbarProvider>
      </MainThemeProvider>
    </ReduxProvider>
  )
}
