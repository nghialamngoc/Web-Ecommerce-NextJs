import Cookies from 'js-cookie'

// Key name
const TOKEN_KEY = 'ff83a1098f2c2b04577784712aa633a6'

/**
 * Remove lessor access token
 */
export const removeToken = () => {
  return Cookies.remove(TOKEN_KEY)
}

/**
 * Get access token
 *
 * @returns {String}
 */
export const getToken = (remove = false) => {
  const token = Cookies.get(TOKEN_KEY)

  if (remove) {
    removeToken()
  }

  return token
}

/**
 * Set access token
 *
 * @param {String} token
 */
export const setToken = (token: string) => {
  return Cookies.set(TOKEN_KEY, token)
}

/**
 * Check if given key is token key
 *
 * @param {String} key
 */
export const isTokenKey = (key: string) => {
  return key === TOKEN_KEY
}
