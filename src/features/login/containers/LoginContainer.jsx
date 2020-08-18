import { useRouter } from 'next/router'
import { useMutation } from 'react-query'

import basicFetch from '@/utils/basicFetch'
import tokenName from '@/consts/tokenName'

import Login from '../components/Login'

const LoginContainer = () => {
  const router = useRouter()
  const [login, { error, isLoading }] = useMutation(basicFetch('/api/user/login', 'POST'), {
    onSuccess: data => {
      document.cookie += `; ${tokenName}=${data.token}`
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