import withConnection from '@/mongoose/withConnection'
import UserModel from '@/mongoose/models/UserModel'
import withResponseResolver from '@/server/middleware/withResponseResolver'
import withBody from '@/server/middleware/withBody'
import withTokenVerification from '@/server/middleware/withTokenVerification'

const getUser = (req) => {
  if (req.method !== 'POST') {
    throw new Error('Only POST method is allowed for this endpoint')
  }

  const user = new UserModel(req.body)

  return user.save()
}

export default withConnection(withResponseResolver(withBody(withTokenVerification(getUser))))