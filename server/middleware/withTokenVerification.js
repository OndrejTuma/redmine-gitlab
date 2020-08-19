import cookie from 'cookie'

import verifyToken from '@/utils/authToken/verifyToken'
import parseTokenFromCookies from '@/utils/authToken/parseTokenFromCookies'
import tokenName from '@/consts/tokenName'
import isomorphicRedirect from '@/utils/isomorphicRedirect'
import signToken from '@/utils/authToken/signToken'

export default function withTokenVerification(handler) {
  return function (req, res) {
    const token = parseTokenFromCookies(req.headers.cookie)
    const user = verifyToken(token)

    if (user.error) {
      res.setHeader('Set-Cookie', cookie.serialize(tokenName, ''))
      isomorphicRedirect('/', res)

      return
    }

    res.setHeader('Set-Cookie', cookie.serialize(tokenName, signToken({
      id: user._id,
      name: user.name,
      redmineToken: user.redmineToken,
      gitlabToken: user.gitlabToken,
    })))

    return handler(req, res)
  }
}