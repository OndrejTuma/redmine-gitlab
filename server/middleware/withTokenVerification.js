import cookie from 'cookie'

import verifyToken from '@/utils/authToken/verifyToken'
import parseTokenFromCookies from '@/utils/authToken/parseTokenFromCookies'

export default function withTokenVerification(handler) {
  return function (req, res) {
    const token = parseTokenFromCookies(req.headers.cookie)
    const verify = verifyToken(token)

    if (verify.error) {
      // remove cookie
    } else {
      res.setHeader('Set-Cookie', cookie.serialize('name', String(query.name), {
        httpOnly: true,
        maxAge: 60 * 60 * 24 * 7 // 1 week
      }));
    }

    console.log('verify', verify)

    return handler(req, res)
  }
}