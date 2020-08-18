import jwt from 'jsonwebtoken'
import withConnection from '@/mongoose/withConnection'
import UserModel from '@/mongoose/models/UserModel'
import withBody from '@/server/middleware/withBody'
import withErrorHandler from '@/server/middleware/withErrorHandler'

const login = async (req, res) => {
  const user = await UserModel.findOne(JSON.parse(req.body))

  res.setHeader('Content-Type', 'application/json')

  if (!user) {
    res.statusCode = 400
    res.end(JSON.stringify({
      error: true,
      message: 'Neplatné přihlašovací údaje'
    }))
  }

  const token = jwt.sign({ data: user.name }, process.env.JWT_SALT, { expiresIn: '1h' })

  res.statusCode = 200
  res.end(JSON.stringify({
    success: true,
    token,
  }))
}

export default withConnection(withErrorHandler(withBody(login)))