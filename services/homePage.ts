import CONFIG from '../constants/config'
import axios from './axios'
import data from '../public/data/home-top-banner.json'

export const getHomePageTopBanner = async (): Promise<any> => {
  try {
    // TODO: replace
    // return await axios.get(`${CONFIG.apiFakeBaseUrl}/home-top-banner`)
    return data
  } catch (err) {
    Promise.reject(err)
  }
}
