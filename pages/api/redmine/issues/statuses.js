import withConnection from '@/mongoose/withConnection'
import withResponseResolver from '@/server/middleware/withResponseResolver'
import withBody from '@/server/middleware/withBody'
import withTokenVerification from '@/server/middleware/withTokenVerification'
import basicFetch from '@/utils/basicFetch'
import { REDMINE_URL } from '@/consts/urls'

const issueStatuses = (req) => {
  switch (req.method) {
    case 'GET':
      return basicFetch(`${REDMINE_URL}/issue_statuses.json?${new URLSearchParams(req.query).toString()}`)()
  }
}

export default withConnection(withTokenVerification(withResponseResolver(withBody(issueStatuses))))