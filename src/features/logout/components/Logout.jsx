const Logout = ({ logout }) => {
  return (
    <div style={{float: 'right'}}>
      <button onClick={logout}>Odhlásit se</button>
    </div>
  )
}

export default Logout