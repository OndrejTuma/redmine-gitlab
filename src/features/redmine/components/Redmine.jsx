import TaskList from '@/features/redmine/components/TaskList'
import IssueStatuses from '@/features/redmine/components/IssueStatuses'

const Redmine = props => {
  return (
    <div>
      <h2>Redmine Issues:</h2>
      <IssueStatuses statuses={props.statuses && props.statuses.issue_statuses}>
        {statuses => (
          <TaskList statuses={statuses} {...props}/>
        )}
      </IssueStatuses>
    </div>
  )
}

export default Redmine