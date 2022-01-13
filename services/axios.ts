import axios from 'axios'
import { API_BASE_URL } from '../constants/endpoints'
import { getToken } from '../helpers/auth'

let refreshTokenRequest: any = null

// Create new axios instance
const instance = axios.create()

// Add a request interceptor
instance.interceptors.request.use((config) => {
  const newConfig = {
    ...config
  }

  // Token
  const token = getToken()
  if (token && newConfig.headers) {
    newConfig.headers['Authorization'] = 'Bearer ' + token
  }

  newConfig.baseURL = API_BASE_URL

  return newConfig
})

// Add a response interceptor
instance.interceptors.response.use(
  async (response) => {
    const { data } = response

    return data
  },
  async (error) => {
    const { response, config = {} } = error

    if (response?.status === 401) {
      refreshTokenRequest = refreshTokenRequest
        ? refreshTokenRequest
        : getToken()

      await refreshTokenRequest
      refreshTokenRequest = null
      return instance(config)
    }
    return Promise.reject(error)
  }
)

export default instance
