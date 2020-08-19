import withConnection from '@/mongoose/withConnection'
import withResponseResolver from '@/server/middleware/withResponseResolver'
import withBody from '@/server/middleware/withBody'
import withTokenVerification from '@/server/middleware/withTokenVerification'
import basicFetch from '@/utils/basicFetch'
import { REDMINE_URL } from '@/consts/urls'

const issues = (req) => {
  switch (req.method) {
    case 'GET':
      const qs = new URLSearchParams(req.query)
      return basicFetch(`${REDMINE_URL}/issues.json?${qs.toString()}`)()
  }
}

export default withConnection(withResponseResolver(withBody(withTokenVerification(issues))))