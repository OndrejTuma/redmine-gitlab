const withErrorHandler = Component => props => {
  if (props.error) {
    return <h3 style={{color: 'red'}}>Chyba: {error}</h3>
  }

  return <Component {...props}/>
}

export default withErrorHandler