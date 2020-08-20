const TaskList = ({ issues }) => {
  return (
    <ul>
      {issues.map(issue => (
        <li key={issue.id}>
          (<i>{issue.status.name}</i>){' '}
          <small>{issue.tracker.name}</small>{' '}
          {console.log('issue', issue)}
          {issue.subject}
        </li>
      ))}
    </ul>
  )
}

export default TaskList