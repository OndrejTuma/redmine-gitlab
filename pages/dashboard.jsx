import cookie from 'cookie'
import parseTokenFromCookies from '@/utils/authToken/parseTokenFromCookies'
import verifyToken from '@/utils/authToken/verifyToken'
import isomorphicRedirect from '@/utils/isomorphicRedirect'
import tokenName from '@/consts/tokenName'

export default (props) => (
  <div>
    <h1>Welcome</h1>
    <pre><code>{JSON.stringify(props, null, 4)}</code></pre>
  </div>
)

export async function getServerSideProps(context) {
  const token = parseTokenFromCookies(context.req.headers.cookie)
  const user = verifyToken(token)

  if (user.error) {
    context.res.setHeader('Set-Cookie', cookie.serialize(tokenName, ''))
    isomorphicRedirect('/', context)
    return { props: {} }
  }

  // const result = await fetch(`/api/user/${verified.userId}`)

  return {
    props: {
      user,
    },
  }
}