const allowedStatuses = [1, 12, 14, 16, 2, 8, 17, 10, 25, 3, 9, 18, 6, 5]

const IssueStatuses = ({ statuses }) => {
  if (!Array.isArray(statuses)) {
    return null
  }

  return (
    <div>
      <table>
        <thead>
        <tr>
          {statuses.filter(({ id }) => allowedStatuses.indexOf(id) > -1).map(({ id, name }) => (
            <th key={id}>
              {name}
            </th>
          ))}
        </tr>
        </thead>
        <tbody>

        </tbody>
      </table>
    </div>
  )
}

export default IssueStatuses