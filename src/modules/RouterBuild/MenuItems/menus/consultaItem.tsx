import React from 'react'
import { makeMenuItem } from '@modules/RouterBuild/MenuItems/makeMenuItem'
import Consulta from '@modules/Consulta'

export const consultaItem = makeMenuItem(({ addItem, build, config, data }) => {
  config({
    pathname: '/consulta'
  })

  addItem({
    pathname: '',
    component: <Consulta />
  })

  return build()
})
