import config from '../config'

const TokenService = {
  makeBasicAuthToken(user_name, password) {
    return window.btoa(`${user_name}:${password}`)
  },
  saveAuthToken(token) {
    window.localStorage.setItem(config.TOKEN_KEY, token) 
  },
  getAuthToken(token) {
    return window.localStorage.getItem(config.TOKEN_KEY, token)
  },
  clearAuthToken() {
    window.localStorage.removeItem(config.TOKEN_KEY)
  },
  hasAuthToken() {
    return !!TokenService.getAuthToken()
  },
}

export default TokenService