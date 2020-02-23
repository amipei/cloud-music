import React from 'react'
import LazyLoad from "react-lazyload";
import { FiPlay } from "react-icons/fi";
import './music_card.scss'
import { disposePlayCount } from '../../utils';
interface MusicCardProps {
  style?: React.CSSProperties
  coverImg: string
  coverAlt?: string
  playCount?: number
  name: string
  handleClick?: () => void
}

const renderCover = (prefixCls: string, props: MusicCardProps) => {
  const { style, coverImg, coverAlt, playCount = -1} = props

  const lazyloadHeight = style ? style.width ? parseInt(style.width as string) : undefined : undefined
  return (
    <div className={`${prefixCls}__cover`} >
      <div className={`${prefixCls}__decorate`}></div>
      {
        playCount >= 0
          ? (
            <span className={`${prefixCls}__play-count`}>
              <FiPlay color="white" size="1em" />
              {disposePlayCount(playCount)}
            </span>
          )
          : null
      }
      <LazyLoad height={lazyloadHeight}>
        <img src={coverImg} alt={coverAlt} />
      </LazyLoad>
    </div>
  )
}

const renderTitle = (prefixCls: string, props: MusicCardProps) => {
  const { name } = props
  return (
    <div className={`${prefixCls}__title`}>{ name }</div>
  )
}

const MusicCard: React.FC<MusicCardProps> = (props) => {
  const { style } = props
  const { handleClick } = props

  const prefixCls = 'music-card'
  return (
    <div style={style} className={prefixCls} onClick={handleClick}>
      {renderCover(prefixCls, props)}
      {renderTitle(prefixCls, props)}
    </div>
  )
}

export default React.memo(MusicCard)
