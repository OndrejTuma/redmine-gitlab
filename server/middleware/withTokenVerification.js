import jwt from 'jsonwebtoken'
import cookie from 'cookie'

import tokenName from '@/consts/tokenName'

export default function withTokenVerification(handler) {
  return function (req, res) {
    const token = cookie.parse(req.headers.cookie)[tokenName]

    const verify = jwt.verify(token, process.env.JWT_SALT)

    console.log(verify)

    return handler(req, res)
  }
}