import withConnection from '@/mongoose/withConnection'
import withResponseResolver from '@/server/middleware/withResponseResolver'
import withBody from '@/server/middleware/withBody'
import withTokenVerification from '@/server/middleware/withTokenVerification'
import basicFetch from '@/utils/basicFetch'
import { REDMINE_URL } from '@/consts/urls'

const currentUser = (req) => {
  if (req.method !== 'GET') {
    throw new Error('Request method is not allowed')
  }
  const { key } = req.body

  return basicFetch(`${REDMINE_URL}/users/current.json?key=${key}`)()
}

export default withConnection(withResponseResolver(withBody(withTokenVerification(currentUser))))