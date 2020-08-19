import cookie from 'cookie'
import parseTokenFromCookies from '@/utils/authToken/parseTokenFromCookies'
import verifyToken from '@/utils/authToken/verifyToken'
import isomorphicRedirect from '@/utils/isomorphicRedirect'
import tokenName from '@/consts/tokenName'
import UserContext from '@/contexts/UserContext'
import RedmineContainer from '@/features/redmine/containers/RedmineContainer'

export default ({ user }) => (
  <div>
    <h1>Welcome {user.name}</h1>
    <UserContext.Provider value={user}>
      <RedmineContainer/>
    </UserContext.Provider>
  </div>
)

export async function getServerSideProps(context) {
  // TODO: make this piece reusable
  const token = parseTokenFromCookies(context.req.headers.cookie)
  const user = verifyToken(token)

  if (user.error) {
    context.res.setHeader('Set-Cookie', cookie.serialize(tokenName, ''))
    isomorphicRedirect('/', context.res)
    return { props: {} }
  }

  return {
    props: {
      user,
    },
  }
}