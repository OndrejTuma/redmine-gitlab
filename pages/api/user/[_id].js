import withConnection from '@/mongoose/withConnection'
import UserModel from '@/mongoose/models/UserModel'
import withResponseResolver from '@/server/middleware/withResponseResolver'
import withBody from '@/server/middleware/withBody'
import withTokenVerification from '@/server/middleware/withTokenVerification'

const getUser = (req) => {
  return UserModel.findOne(req.body)
}

export default withConnection(withResponseResolver(withBody(withTokenVerification(getUser))))