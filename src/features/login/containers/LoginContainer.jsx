import { useRouter } from 'next/router'
import { useMutation } from 'react-query'

import basicFetch from '@/utils/basicFetch'

import Login from '../components/Login'
import saveTokenToCookies from '@/utils/authToken/saveTokenToCookies'

const LoginContainer = () => {
  const router = useRouter()
  const [login, { error, isLoading }] = useMutation(basicFetch('/api/login', 'POST'), {
    onSuccess: ({ token }) => {
      saveTokenToCookies(token)
      router.push('/dashboard')
    },
  })

  return (
    <Login
      isLoading={isLoading}
      login={login}
      error={error}
    />
  )
}

export default LoginContainer