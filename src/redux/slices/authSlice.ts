import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SessionData } from '@typings/session'
import { Null } from 'plc-shared/typing/genericTypes'

export interface AuthState {
  isAuth: boolean
  user: Null<SessionData>
}

const initialState: AuthState = {
  isAuth: false,
  user: null
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload
    },
    setUser: (state, action: PayloadAction<AuthState['user']>) => {
      state.user = action.payload
    }
  }
})

export const { setAuth, setUser } = authSlice.actions

export const authReducer = authSlice.reducer
