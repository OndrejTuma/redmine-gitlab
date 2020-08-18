import cookie from 'cookie'

import tokenName from '@/consts/tokenName'

function parseTokenFromCookies(cookies) {
  return cookie.parse(cookies)[tokenName]
}

export default parseTokenFromCookies