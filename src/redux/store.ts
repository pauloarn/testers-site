import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import { authReducer } from '@slices/authSlice'
import { config } from '@utils/configUtil'

const store = configureStore({
  devTools: config.isDevelopment
    ? {
        name: config.appName
      }
    : false,
  reducer: {
    auth: authReducer
  }
})

export type AppStore = typeof store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action>

export default store
