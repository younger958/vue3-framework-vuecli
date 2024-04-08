const TokenKey = 'token'
/** 
 * 获取token
 */
export function getToken() {
  return window.localStorage.getItem(TokenKey)
}
/**
 * 写入token
 * @param token 要写入的值
 * @returns 
 */
export function setToken(token: string) {
  return window.localStorage.setItem(TokenKey, token)
}
/**
 * 删除token
 * @returns 
 */
export function removeToken() {
  return window.localStorage.removeItem(TokenKey)
}
