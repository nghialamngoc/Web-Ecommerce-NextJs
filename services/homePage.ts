import CONFIG from '../constants/config'
import axios from './axios'

export const getHomePageTopBanner = async (): Promise<any> => {
  try {
    return await axios.get(`${CONFIG.apiFakeBaseUrl}/home-top-banner`)
  } catch (err) {
    Promise.reject(err)
  }
}
