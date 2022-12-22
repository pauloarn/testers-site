import { MenuData } from './index'
import { Null } from 'plc-shared/typing/genericTypes'
import { ReactNode } from 'react'

interface MenuConfig {
  pathname: string
  hidden?: boolean
}

export interface MenuItems {
  pathname: string
  hidden?: boolean
  component: ReactNode
}

interface MakeMenuItemProps {
  build: () => MenuItems[]
  addItem: (item: MenuItems) => void
  config: (config: MenuConfig) => void
  data: MenuData
}

export const makeMenuItem = (func: (data: MakeMenuItemProps) => MenuItems[]) => {
  let menuConfig: Null<MenuConfig> = null
  const listItem: MenuItems[] = []

  const build: MakeMenuItemProps['build'] = () => {
    if (!menuConfig) throw new Error('Sem configuração de menu')
    if (menuConfig.hidden) return []
    return [...listItem].map((item) => {
      item.pathname = menuConfig?.pathname + item.pathname
      return item
    })
  }

  const addItem: MakeMenuItemProps['addItem'] = (item) => {
    const isExist = listItem.find((i) => i.pathname === item.pathname)
    if (!isExist) {
      listItem.push(item)
    }
  }

  const config: MakeMenuItemProps['config'] = (config) => {
    menuConfig = config
  }

  return (data: MenuData) =>
    func({
      build,
      addItem,
      config,
      data
    })
}
