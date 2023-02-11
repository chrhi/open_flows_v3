import Cookies from 'js-cookie'

// this will set the cookie
export const setCookieAuth = (token:string) => {
    Cookies.set('auth', token)
}

// this will remove the cookie
export const removeCookie = () => {
    Cookies.remove('auth')
}