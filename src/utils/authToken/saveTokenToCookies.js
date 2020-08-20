import { setCookie } from 'nookies'

import tokenName from '@/consts/tokenName'

/**
 * @param {string} token
 * @param {object} [ctx] - Next.js context object
 * @return {{}}
 */
function saveTokenToCookies(token, ctx) {
  return setCookie(ctx, tokenName, token)
}

export default saveTokenToCookies