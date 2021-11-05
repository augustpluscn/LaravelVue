/* eslint-disable camelcase */
import http from './http'

export default {
  dd: () => {
    return http.get('dd', {}, true)
  },
  sysset: () => {
    return http.get('sysset', {}, true)
  },
  login: (obj) => {
    return http.post('auth/login', obj)
  },
  logout: () => {
    return http.post('auth/logout', {}, true)
  }
}
