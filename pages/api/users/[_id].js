import withConnection from '@/mongoose/withConnection'
import UserModel from '@/mongoose/models/UserModel'
import withResponseResolver from '@/server/middleware/withResponseResolver'
import withBody from '@/server/middleware/withBody'
import withTokenVerification from '@/server/middleware/withTokenVerification'

const getUser = (req) => {
  switch (req.method) {
    case 'POST':
      throw new Error('POST method is not allowed')
    case 'GET':
      return UserModel.findOne(req.body)
    case 'PUT':
      //update user
    case 'DELETE':
      //delete user
  }
}

export default withConnection(withResponseResolver(withBody(withTokenVerification(getUser))))