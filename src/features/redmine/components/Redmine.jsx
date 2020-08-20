import TaskList from '@/features/redmine/components/TaskList'
import IssueStatuses from '@/features/redmine/components/IssueStatuses'
import AsyncDataPresenter from '@/components/AsyncDataPresenter'

const Redmine = ({issues, statuses}) => {
  return (
    <div>
      <h2>Redmine Board:</h2>

      <h3>Statuses</h3>
      <AsyncDataPresenter query={statuses} transformData={data => data.issue_statuses}>
        {data => (
          <IssueStatuses statuses={data}/>
        )}
      </AsyncDataPresenter>

      <h3>Issues</h3>
      <AsyncDataPresenter query={issues} transformData={data => data.issues}>
        {data => (
          <TaskList issues={data}/>
        )}
      </AsyncDataPresenter>
    </div>
  )
}

export default Redmine