const Redmine = ({issues, isLoading, error}) => {

  if (error) {
    return (
      <h3 style={{color: 'red'}}>Chyba: {error}</h3>
    )
  }

  return (
    <div>
      <h2>Redmine Issues:</h2>
      {isLoading ? (
        <p><i>čekejte...</i></p>
      ) : (
        <ul>
          {issues.issues.map(issue => (
            <li key={issue.id}>
              {console.log('issue', issue)}
              {issue.subject}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Redmine