import React from 'react'
import classNames from 'classnames'
import { IoIosPlay, IoIosRefresh } from "react-icons/io";
import { MdPlayCircleOutline } from "react-icons/md";
import './content_header.scss'

interface ContentHeaderProps {
  title: string
  subTitle: string
  btnName: string
  icon?: 'none' | 'play1' | 'play2' | 'refresh'
  onClick?: () => void
}
const icons = {
  'play1': <IoIosPlay size='1em' />,
  'play2': <MdPlayCircleOutline size='1em' />,
  'refresh': <IoIosRefresh size="1em" />
}
const renderSubHeading = (prefixCls: string, props: ContentHeaderProps) => {
  
} 

const renderBbutton = (prefixCls: string, props: ContentHeaderProps) => {
  const { btnName, icon = 'none', onClick } = props

  return ( 
    <button className={`${prefixCls}__btn`} onClick={onClick}>
      {icon !== 'none' ? icons[icon] : null }
      <span>{btnName}</span>
    </button>
  )
}
const ContentHeader: React.FC<ContentHeaderProps> = (props) => {
  const { title, subTitle } = props
  const prefixCls = 'content-header';
  return (
    <div className={prefixCls}>
      <h2 className={`${prefixCls}__title`}>{title}</h2>
      <div className={`${prefixCls}__sub-heading`}>
        <span className={`${prefixCls}__sub-title`}>{subTitle}</span>
        {renderBbutton(prefixCls, props)}
      </div>
    </div>
  )
}

export default React.memo(ContentHeader)
