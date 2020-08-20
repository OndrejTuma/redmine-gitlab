import parseTokenFromCookies from '@/utils/authToken/parseTokenFromCookies'
import verifyToken from '@/utils/authToken/verifyToken'
import deleteTokenFromCookies from '@/utils/authToken/deleteTokenFromCookies'
import isomorphicRedirect from '@/utils/isomorphicRedirect'

const withAuthUser = context => {
  const token = parseTokenFromCookies(context)
  const user = verifyToken(token)

  if (user.error) {
    deleteTokenFromCookies(context)
    isomorphicRedirect('/', context.res)
    return { props: {} }
  }

  return user
}

export default withAuthUser