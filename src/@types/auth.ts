import { SessionData } from '@typings/session'

interface NotInitialized {
  initialized: false
}

export interface Initialized {
  initialized: true
  isAuthenticated: boolean
  handleLogin: (user: SessionData) => void
  handleLogout: () => void
}

export type AuthContext = Initialized | NotInitialized
