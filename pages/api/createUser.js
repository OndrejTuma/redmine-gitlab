import UserModel from '../../mongoose/UserModel'
import withConnection from '../../mongoose/withConnection'

const createUsers = async (req, res) => {
  const {name, password} = JSON.parse(req.body)

  res.setHeader('Content-Type', 'application/json')

  try {
    const user = new UserModel({
      name,
      password,
    })
    const result = await user.save()

    res.statusCode = 200
    res.end(JSON.stringify(result))
  } catch (e) {
    console.error(e)
    res.statusCode = 400
    res.end(JSON.stringify({
      error: true,
      message: e.message,
    }))
  }
}

export default withConnection(createUsers)