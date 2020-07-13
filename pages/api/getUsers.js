import withDatabase from '../../server/middleware/withDatabase'

const getUsers = async (req, res) => {
  //const user = await UserModel.findOne({id: req.body.id})
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify({
    user: {name: 'foo', password: 'ole'},
  }))
}

export default withDatabase(getUsers)