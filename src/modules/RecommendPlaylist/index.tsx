import React from 'react'
import './recommend_playlist.scss'
import { ContentHeader, Slider, MusicCard } from '../../components'


interface RecommendPlaylistProps {
  data: any
}

const RecommendPlaylist: React.FC<RecommendPlaylistProps> = (props) => {
  const { data } = props
  const prefixCls = 'recommend-playlist'

  const handleClick = () => {
    //TODO: 打开歌单广场
  }
  return (
    <div className={prefixCls}>
      <ContentHeader title="推荐歌单" subTitle="为你精挑细选" btnName="查看更多" onClick={handleClick} />
      <Slider data={data} swiperOption={{
        slidesPerView: "auto",
        spaceBetween: 8,
        freeMode: true
      }} renderProp={(item) => (
        <MusicCard
          style={{ width: '100px' }}
          playCount={item.playcount}
          coverImg={item.picUrl}
          coverAlt={item.name}
          name={item.name}
        />)}
      />
    </div>
  )
}

export default React.memo(RecommendPlaylist)
