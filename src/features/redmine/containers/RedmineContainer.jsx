import { useContext } from 'react'
import { useQuery } from 'react-query'
import UserContext from '@/contexts/UserContext'
import basicFetch from '@/utils/basicFetch'
import Redmine from '@/features/redmine/components/Redmine'

const RedmineContainer = () => {
  const user = useContext(UserContext)
  const {isLoading, error, data} = useQuery('redmine', basicFetch(`/api/redmine/issues?key=${user.redmine.token}&assigned_to_id=me&status_id=open`, 'GET'))

  return (
    <Redmine
      error={error}
      isLoading={isLoading}
      issues={data}
    />
  )
}

export default RedmineContainer