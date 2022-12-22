import React from 'react'
import { makeMenuItem } from '@modules/RouterBuild/MenuItems/makeMenuItem'
import Configuracao from '@modules/Configuracao'

export const configuracaoItem = makeMenuItem(({ addItem, build, config }) => {
  config({
    pathname: '/configuracao'
  })

  addItem({
    pathname: '',
    component: <Configuracao />
  })

  return build()
})
