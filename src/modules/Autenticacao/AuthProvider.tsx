import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { AuthContext as AuthContextType } from '@typings/auth'
import { SessionData } from '@typings/session'
import { useAppDispatch, useAppSelector } from '@hooks/useRedux'
import { setAuth, setUser } from '@slices/authSlice'
import { sessionService } from '@services/sessionService'
import { setItem } from 'plc-shared/utils/localStorageUtil'

export const AuthContext = createContext<AuthContextType>({
  initialized: false
})
export const { Consumer } = AuthContext

export const useAuth = () => {
  return useContext(AuthContext)
}

interface AuthProviderProps {
  children: ReactNode
}

export default function AuthProvider({ children }: AuthProviderProps) {
  const dispatch = useAppDispatch()
  const userSrv = sessionService()
  const isAuthenticated = useAppSelector((state) => state.auth.isAuth)

  const [initialized, setInitialized] = useState(false)

  useEffect(() => {
    setInitialized(true)
  }, [])

  const handleLogout = () => {
    userSrv.logout().finally(() => {
      dispatch(setAuth(false))
      dispatch(setUser(null))
      setItem('isAuth', false)
    })
  }

  const handleUserLogin = (session: SessionData) => {
    dispatch(setAuth(true))
    dispatch(setUser(session))
    setItem('isAuth', true)
  }

  return (
    <AuthContext.Provider
      value={{
        initialized,
        isAuthenticated,
        handleLogout,
        handleLogin: handleUserLogin
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
