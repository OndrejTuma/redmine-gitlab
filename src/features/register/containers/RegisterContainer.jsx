import { useMutation } from 'react-query'

import basicFetch from '@/utils/basicFetch'

import Register from '../components/Register'

const RegisterContainer = () => {
  const [register, { error, isLoading }] = useMutation(basicFetch('/api/users', 'POST'), {
    onSuccess: () => {
      alert('done!')
    },
  })

  return (
    <Register
      isLoading={isLoading}
      register={register}
      error={error}
    />
  )
}

export default RegisterContainer