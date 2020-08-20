import verifyToken from '@/utils/authToken/verifyToken'
import parseTokenFromCookies from '@/utils/authToken/parseTokenFromCookies'

export default function withTokenVerification(handler) {
  return function (req, res) {
    const token = parseTokenFromCookies({ req })
    const user = verifyToken(token)

    if (user.error) {
      res.statusCode = 400
      res.end(JSON.stringify({
        error: true,
        message: 'Authorization token is not valid',
      }))

      return
    }

    return handler(req, res)
  }
}