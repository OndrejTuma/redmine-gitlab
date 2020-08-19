import Link from 'next/link'
import LoginContainer from '@/features/login/containers/LoginContainer'

export default () => (
  <div>
    <h1>Redmine-Gitlab</h1>
    <h2>Přihlaste se</h2>
    <LoginContainer/>
    <p>Nemáte účet? <Link href={'/register'}><a>Registrujte se</a></Link></p>
  </div>
)