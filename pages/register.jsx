import Link from 'next/link'
import RegisterContainer from '@/features/register/containers/RegisterContainer'

export default () => (
  <div>
    <h1>Redmine-Gitlab</h1>
    <h2>Registrace</h2>
    <RegisterContainer/>
    <p>Zpět na <Link href={'/'}><a>Přihlášení</a></Link></p>
  </div>
)