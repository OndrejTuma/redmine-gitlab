import { useContext } from 'react'
import { useQuery } from 'react-query'
import UserContext from '@/contexts/UserContext'
import basicFetch from '@/utils/basicFetch'
import Redmine from '@/features/redmine/components/Redmine'

const RedmineContainer = () => {
  const user = useContext(UserContext)
  const {data: statuses} = useQuery('redmine_statuses', basicFetch(`/api/redmine/issues/statuses?key=${user.redmine.token}`, 'GET'), { refetchOnWindowFocus: false })
  const {isLoading, error, data} = useQuery('redmine', basicFetch(`/api/redmine/issues?key=${user.redmine.token}&assigned_to_id=me&status_id=open`, 'GET'), { refetchOnWindowFocus: false })

  return (
    <Redmine
      error={error}
      isLoading={isLoading}
      data={data}
      statuses={statuses}
    />
  )
}

export default RedmineContainer