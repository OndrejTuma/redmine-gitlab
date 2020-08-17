import UserModel from '../../mongoose/models/UserModel'
import withConnection from '../../mongoose/withConnection'
import withResponseResolver from '../../server/middleware/withResponseResolver'

const createUsers = (req) => {
  const user = new UserModel(req.body)

  return user.save()
}

export default withConnection(withResponseResolver(createUsers))