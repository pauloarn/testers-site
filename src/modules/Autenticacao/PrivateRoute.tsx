import React, { PropsWithChildren } from 'react'
import { Navigate } from 'react-router-dom'
import { Consumer } from './AuthProvider'
import { config } from '@utils/configUtil'

const PrivateRoute = ({ children }: PropsWithChildren<any>) => (
  <Consumer>
    {(auth) => {
      if (!auth.initialized) {
        return null
      }

      const getPreviousPage = () => {
        const previousPage = encodeURIComponent(window.location.hash.slice(1))
        return previousPage !== '%2F' ? `?prev=${previousPage}` : ''
      }

      if (!auth.isAuthenticated) {
        return (
          <Navigate to={`${config.authRoute}${getPreviousPage()}`} replace />
        )
      }

      return children
    }}
  </Consumer>
)

export default PrivateRoute
