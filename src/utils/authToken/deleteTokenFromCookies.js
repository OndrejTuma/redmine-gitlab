import { destroyCookie } from 'nookies'

import tokenName from '@/consts/tokenName'

/**
 * @param {object} [ctx] - Next.js context object
 * @return {{}}
 */
function deleteTokenFromCookies(ctx) {
  return destroyCookie(ctx, tokenName)
}

export default deleteTokenFromCookies