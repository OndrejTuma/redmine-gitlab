import Cookies from 'js-cookie'

import tokenName from '@/consts/tokenName'

function saveTokenToCookies(token) {
  Cookies.set(tokenName, token)
}

export default saveTokenToCookies