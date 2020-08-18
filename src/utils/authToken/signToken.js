// SSR use only
import jwt from 'jsonwebtoken'

function signToken(data) {
  return jwt.sign(data, process.env.JWT_SALT, { expiresIn: '1h' })
}

export default signToken