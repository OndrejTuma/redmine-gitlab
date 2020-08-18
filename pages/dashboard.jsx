export default () => (
  <div>
    <h1>Welcome</h1>

  </div>
)

export async function getServerSideProps(context) {

  return {
    props: {}, // will be passed to the page component as props
  }
}