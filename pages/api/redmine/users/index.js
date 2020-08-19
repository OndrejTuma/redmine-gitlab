import withConnection from '@/mongoose/withConnection'
import withResponseResolver from '@/server/middleware/withResponseResolver'
import withBody from '@/server/middleware/withBody'
import withTokenVerification from '@/server/middleware/withTokenVerification'
import basicFetch from '@/utils/basicFetch'
import { REDMINE_URL } from '@/consts/urls'

const users = (req) => {
  const { key } = req.body

  switch (req.method) {
    case 'GET':
      return basicFetch(`${REDMINE_URL}/users.json?key=${key}`)()
  }
}

export default withConnection(withResponseResolver(withBody(withTokenVerification(users))))