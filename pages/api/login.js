import withConnection from '@/mongoose/withConnection'
import UserModel from '@/mongoose/models/UserModel'
import withBody from '@/server/middleware/withBody'
import withErrorHandler from '@/server/middleware/withErrorHandler'
import signToken from '@/utils/authToken/signToken'
import basicFetch from '@/utils/basicFetch'
import { REDMINE_URL } from '@/consts/urls'

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

  const redmineUser = await basicFetch(`${REDMINE_URL}/users/current.json?key=${user.redmineToken}`)()
    .then(data => data.user)

  const token = signToken({
    id: user._id,
    name: user.name,
    redmine: {
      token: user.redmineToken,
      id: redmineUser.id,
    },
    gitlab: {
      token: user.gitlabToken,
    },
  })

  res.statusCode = 200
  res.end(JSON.stringify({
    success: true,
    token,
  }))
}

export default withConnection(withErrorHandler(withBody(login)))