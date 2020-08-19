export default function withBody(handler) {
  return function (req, res) {
    if (req.method === 'GET') {
      req.body = req.query
    }
    else {
      req.body = JSON.parse(req.body)
    }

    return handler(req, res)
  }
}