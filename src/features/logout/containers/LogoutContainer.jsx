import Logout from '../components/Logout'
import deleteTokenFromCookies from '@/utils/authToken/deleteTokenFromCookies'
import isomorphicRedirect from '@/utils/isomorphicRedirect'

const LogoutContainer = () => {
  const logout = () => {
    deleteTokenFromCookies()
    isomorphicRedirect('/')
  }

  return (
    <Logout
      logout={logout}
    />
  )
}

export default LogoutContainer