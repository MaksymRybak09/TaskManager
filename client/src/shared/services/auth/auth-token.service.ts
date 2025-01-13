import Cookies from 'js-cookie'
import { Tokens } from '../../constants/tokens.constants'

export const getAccessToken = () => {
  const accessToken = Cookies.get(Tokens.ACCESS_TOKEN)
  return accessToken || null
}

export const saveTokenToStorage = (accessToken: string) => {
  Cookies.set(Tokens.ACCESS_TOKEN, accessToken, {
    domain: process.env.NEXT_PUBLIC_CLIENT_HOST,
    sameSite: 'strict',
    expires: 1,
  })
}

export const removeTokenFromStorage = () => {
  Cookies.remove(Tokens.ACCESS_TOKEN)
}
