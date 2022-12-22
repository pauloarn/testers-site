import { config } from '@utils/configUtil'
import { HashRouter, Route, Routes } from 'plc-shared/router'
import React, { Suspense } from 'react'
import { LoadingScreen } from 'plc-shared/components'
import { useMenuItems } from '@modules/RouterBuild/MenuItems'
import { Error404 } from '@modules/RouterBuild/Error404'
import { PrivateRoute } from '@modules/Autenticacao'
import Login from '@modules/Login'
import { Navigate } from 'react-router-dom'

export const RouterBuild = () => {
  const { menuItems } = useMenuItems()

  return (
    <Suspense fallback={<LoadingScreen height={'100%'} loadingText={'Aguarde...'} />}>
      <HashRouter>
        <Routes>
          <Route path={'/'} element={<Navigate to={config.authRoute} />} />
          <Route path={config.authRoute} element={<Login />} />
          {menuItems.map((item) => {
            return (
              <Route
                key={item.pathname}
                path={config.baseRoute + item.pathname}
                element={<PrivateRoute>{item.component}</PrivateRoute>}
              />
            )
          })}
          <Route path={'*'} element={<Error404 />} />
        </Routes>
      </HashRouter>
    </Suspense>
  )
}
