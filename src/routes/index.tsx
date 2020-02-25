import React from 'react';
import { Redirect } from 'react-router-dom';
import { RouteConfig } from 'react-router-config';
import { Home, Find, PlaylistPlaza, MyCenter } from '../view';

const routeConfig: RouteConfig[] = [{
  path: '/',
  component: Home,
  routes: [{
    path: '/',
    exact: true,
    render: () => (
      <Redirect to='/find' />
    )
  }, {
    path: '/find',
    component: Find
  }, {
    path: '/playlistplaza',
    component: PlaylistPlaza
  }]
}, {
  path: '/mycenter',
  component: MyCenter
}]

export default routeConfig