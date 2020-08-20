const IssueStatuses = ({ children, statuses }) => {
  if (!Array.isArray(statuses)) {
    return null
  }

  return (
    <div>
      <ul>
        {statuses.filter(({ is_closed }) => !is_closed).map(({ id, name }) => (
          <li key={id}>
            {name} <small>({id})</small>
          </li>
        ))}
      </ul>
      {children(statuses)}
    </div>
  )
}

export default IssueStatuses