import { config } from '@utils/configUtil'
import { useLayoutEffect } from 'react'
import { configShared } from 'plc-shared/utils/configShared'
import { clearAll } from 'plc-shared/utils/localStorageUtil'

export const useStartupSystem = () => {
  const initApiSauce = () => {
    configShared({
      authRoute: config.authRoute,
      isDebug: config.isDevelopment,
      apiContext: config.apiContext,
      apiConfig: {
        baseURL: config.baseUrl
      }
    })
  }

  useLayoutEffect(() => {
    initApiSauce()
    clearAll()
  }, [])
}
