import withAuthUser from '@/server/middleware/withAuthUser'
import UserContext from '@/contexts/UserContext'
import RedmineContainer from '@/features/redmine/containers/RedmineContainer'
import LogoutContainer from '@/features/logout/containers/LogoutContainer'

export default ({ user }) => (
  <div>
    <LogoutContainer/>
    <h1>Welcome {user.name}</h1>
    <UserContext.Provider value={user}>
      <RedmineContainer/>
    </UserContext.Provider>
  </div>
)

export async function getServerSideProps(context) {
  return {
    props: {
      user: withAuthUser(context),
    },
  }
}