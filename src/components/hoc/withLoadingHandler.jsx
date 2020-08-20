const WithLoadingHandler = Component => props => {
  if (props.isLoading) {
    return <div><i>loading...</i></div>
  }

  return <Component {...props}/>
}

export default WithLoadingHandler