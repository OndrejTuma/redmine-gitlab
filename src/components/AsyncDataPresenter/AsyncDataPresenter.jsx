/**
 * @param {React.Node|function} children
 * @param {object} query - react-query useQuery instance
 * @param {function} [transformData] - function to transform data before serving to component. Works only with render props
 * @return {*}
 * @constructor
 */
const AsyncDataPresenter = ({children, query, transformData = data => data}) => {
  if (query.isLoading) {
    return <div><i>loading...</i></div>
  }
  if (query.isError) {
    return <h3 style={{color: 'red'}}>Chyba: {query.error.message || query.error}</h3>
  }

  if (typeof children === 'function') {
    return children(transformData(query.data))
  }

  return children
}

export default AsyncDataPresenter