import withConnection from '../../mongoose/withConnection'
import UserModel from '../../mongoose/models/UserModel'
import withResponseResolver from '../../server/middleware/withResponseResolver'
import withBody from '../../server/middleware/withBody'

const getUser = (req) => {
  return UserModel.findOne(JSON.parse(req.body))
}

export default withConnection(withResponseResolver(withBody(getUser)))