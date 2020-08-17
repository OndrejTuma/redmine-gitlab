import { useMutation } from 'react-query'

import Login from '../components/Login'
import basicFetch from '@/utils/basicFetch'

const LoginContainer = () => {
  const [login, {error, isLoading, data}] = useMutation(basicFetch('/api/user/login', 'POST'))

  return (
    <Login
      isLoading={isLoading}
      login={login}
      error={error}
    />
  )
}

export default LoginContainer