import UserModel from '../../mongoose/models/UserModel'
import withConnection from '../../mongoose/withConnection'
import withErrorHandler from '../../server/middleware/withErrorHandler'

const createUsers = async (req, res) => {
  const user = new UserModel(req.body)

  return user.save()
}

export default withConnection(withErrorHandler(createUsers))