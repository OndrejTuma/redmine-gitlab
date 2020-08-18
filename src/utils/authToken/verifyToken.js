// SSR use only
import jwt from 'jsonwebtoken'

function verifyToken(token) {
  try {
    return jwt.verify(token, process.env.JWT_SALT)
  } catch (e) {
    return {
      error: true,
      message: e.message
    }
  }
}

export default verifyToken