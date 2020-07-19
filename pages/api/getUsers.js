import withConnection from '../../mongoose/withConnection'
import UserModel from '../../mongoose/models/UserModel'
import withErrorHandler from '../../server/middleware/withErrorHandler'
import withBody from '../../server/middleware/withBody'

const getUsers = (req, res) => {
  return UserModel.findOne({ _id: req.body.id })
}

export default withConnection(withErrorHandler(withBody(getUsers)))