import withConnection from '@/mongoose/withConnection'
import UserModel from '@/mongoose/models/UserModel'
import withBody from '@/server/middleware/withBody'
import withErrorHandler from '@/server/middleware/withErrorHandler'
import signToken from '@/utils/authToken/signToken'

const login = async (req, res) => {
  const user = await UserModel.findOne(req.body)

  res.setHeader('Content-Type', 'application/json')

  if (!user) {
    res.statusCode = 400
    res.end(JSON.stringify({
      error: true,
      message: 'Neplatné přihlašovací údaje'
    }))

    return
  }

  const token = signToken({
    id: user._id,
    name: user.name,
  })

  res.statusCode = 200
  res.end(JSON.stringify({
    success: true,
    token,
  }))
}

export default withConnection(withErrorHandler(withBody(login)))