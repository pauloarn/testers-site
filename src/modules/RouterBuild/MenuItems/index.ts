import { useMemo } from 'react'
import { AuthState } from '@slices/authSlice'
import { consultaItem } from './menus/consultaItem'
import { useAppSelector } from '@hooks/useRedux'
import { configuracaoItem } from './menus/configuracaoItem'

export interface MenuData {
  user: AuthState
}

export const useMenuItems = () => {
  const user = useAppSelector((state) => state.auth)

  const menuData = useMemo((): MenuData => {
    return {
      user
    }
  }, [user])

  const buildMenu = () => {
    const menus = [consultaItem, configuracaoItem]
    return menus.flatMap((menu) => {
      return menu(menuData)
    })
  }

  return {
    menuItems: buildMenu()
  }
}
