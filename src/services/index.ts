import { axiosInstance } from "./config";
import qs from 'qs';

export const getFindBannerRequest = () => axiosInstance.get('/banner');

/* 歌单相关 */
//每日推荐歌单
export const getDailyRecommendPlaylistsRequest = () => axiosInstance.get('/recommend/resource');
//歌单广场
interface getPlaylistsRequestParam {
  order: 'hot' | 'new'
  cat: string
  limit: number
}
export const getPlaylistsRequest = (param?: getPlaylistsRequestParam) => {
  return axiosInstance.get(`/top/playlist${qs.stringify(param, {addQueryPrefix: true})}`)
}