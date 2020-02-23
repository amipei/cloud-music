import React from 'react'
import classnames from 'classnames';
import Slider from '../../components/Slider'
import './find_banner.scss'

interface FindBanner {
  bannerId: string    //唯一ID
  pic: string         //图片链接
  targetId: number    //歌曲/专辑id
  targetType: number  //点击类型  0为跳转链接  1为播放歌曲 10为打开专辑  3000 为跳转专辑  
  typeTitle: string
  titleColor: string  //右下角标签颜色
  url?: string | null //跳转链接
  [key: string]: any
}

interface FindBanners {
  [index: string]: FindBanner
}

interface FindBannerProps {
  data: FindBanners
}

const FindBanner: React.FC<FindBannerProps> = (props) => {
  const { data } = props

  const prefixCls = 'find-banner'
  const handleClick = (index: number) => {
    //TODO: 点击唤起其他页面
    console.log(index)
  }
  return (
    <div className={prefixCls}>
      <div className={`${prefixCls}__bg`}></div>
      <Slider data={data} openPagination={true}
        swiperOption={{
          loop: true,
          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },
          pagination: { el: '.swiper-pagination' },
          on: {
            click: function () {
              //@ts-ignore
              let index = this.realIndex
              handleClick(index)
            }
          }
        }}
        renderProp={(item: FindBanner) => {
          let titleClassName = classnames({
            [`${prefixCls}__title`]: true,
            [`${prefixCls}__title--blue`]: item.titleColor === 'blue'
          })
          return (
            <div className={`${prefixCls}__nav`}>
            <img className={`${prefixCls}__img`} src={item.pic} alt="推荐" />
            <span className={titleClassName}>{item.typeTitle}</span>
          </div>
          )
        }}
      />
    </div>
  )
} 

export default React.memo(FindBanner)
