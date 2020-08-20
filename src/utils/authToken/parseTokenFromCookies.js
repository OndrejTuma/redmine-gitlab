import { parseCookies } from 'nookies'

import tokenName from '@/consts/tokenName'

/**
 * @param {object} [ctx] - Next.js context object
 * @return {string}
 */
function parseTokenFromCookies(ctx) {
  const cookies = parseCookies(ctx)

  return cookies.hasOwnProperty(tokenName) ? cookies[tokenName] : ''
}

export default parseTokenFromCookies