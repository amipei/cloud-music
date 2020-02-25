import React from 'react'
import { RouteProps, RouterProps } from 'react-router'
import { HashRouterProps } from 'react-router-dom'
import { RouteConfig, renderRoutes } from 'react-router-config'
import { TopHeader } from '../../modules'

interface HomeProps  {
  route?: RouteConfig
}

const Home: React.FC<HomeProps> = (props) => {
  const { route } = props
  return (
    <div>
      <TopHeader />
      { renderRoutes(route?.routes) }
    </div>
  )
}

export default React.memo(Home)