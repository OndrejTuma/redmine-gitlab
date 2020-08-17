import withConnection from '@/mongoose/withConnection'
import UserModel from '@/mongoose/models/UserModel'
import withBody from '@/server/middleware/withBody'
import withErrorHandler from '../../../server/middleware/withErrorHandler'

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

  // TODO: create jwt access token here
  res.statusCode = 200
  res.end(JSON.stringify({
    success: true,
    user,
  }))
}

export default withConnection(withErrorHandler(withBody(login)))