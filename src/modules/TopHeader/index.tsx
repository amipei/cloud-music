import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiSearch } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

import './top_header.scss';

interface TopHeaderProps {

}

const renderTab = (prefixCls: string) => {
  let tabCls = `${prefixCls}__tab`
  let itemCls = `${prefixCls}__item`
  let activeItemCls = `${prefixCls}__item--active`
  return (
    <span className={tabCls}>
      <NavLink to="mycenter" className={itemCls} activeClassName={activeItemCls}>我的</NavLink>
      <NavLink to="find" className={itemCls} activeClassName={activeItemCls}>发现</NavLink>
    </span> 
  )
}


const TopHeader: React.FC<TopHeaderProps> = () => {
  const prefixCls = 'top-header'
  let menuCls = `${prefixCls}__menu`
  let searchCls = `${prefixCls}__search`

  return (
    <div className={prefixCls}>
      <span className={menuCls}><AiOutlineMenu size='1em' />

      </span>
      {renderTab(prefixCls)}
      <span className={searchCls}><FiSearch size='1em' /></span>
    </div>
  )
}

export default React.memo(TopHeader)
