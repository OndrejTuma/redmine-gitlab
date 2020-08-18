export default function withBody(handler) {
  return function (req, res) {
    if (req.method === 'GET') {
      req.body = JSON.parse(req.query)
    }

    return handler(req, res)
  }
}