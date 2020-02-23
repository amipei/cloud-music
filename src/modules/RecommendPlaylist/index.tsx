import React from 'react'

interface RecommendPlaylistProps {
  data: any
}

const RecommendPlaylist: React.FC<RecommendPlaylistProps> = (props) => {
  const { data } = props
  const prefixCls = 'recommend-playlist'
  return (
    <div>
      
    </div>
  )
}

export default React.memo(RecommendPlaylist)
