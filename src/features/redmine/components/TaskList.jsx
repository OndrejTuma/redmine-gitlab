import withLoadingHandler from '@/components/hoc/withLoadingHandler'
import withErrorHandler from '@/components/hoc/withErrorHandler'

const TaskList = ({ statuses, data }) => {
  return (
    <ul>
      {data.issues.map(issue => (
        <li key={issue.id}>
          (<i>{issue.status.name}</i>){' '}
          <small>{issue.tracker.name}</small>{' '}
          {console.log('issue', issue, statuses)}
          {issue.subject}
        </li>
      ))}
    </ul>
  )
}

export default withLoadingHandler(withErrorHandler(TaskList))