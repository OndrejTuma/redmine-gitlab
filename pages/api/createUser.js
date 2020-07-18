import UserModel from '../../mongoose/models/UserModel'
import withConnection from '../../mongoose/withConnection'

const createUsers = async (req, res) => {
  const userData = JSON.parse(req.body)

  res.setHeader('Content-Type', 'application/json')

  try {
    const user = new UserModel(userData)
    const result = await user.save()

    res.statusCode = 200
    res.end(JSON.stringify(result))
  } catch (e) {
    console.error(e)
    res.statusCode = 400
    res.end(JSON.stringify({
      error: true,
      message: e.message,
      errors: e.errors,
    }))
  }
}

export default withConnection(createUsers)