export default function withResponseResolver(handler) {
  return async (req, res) => {
    try {
      const handlerResult = await handler(req, res)

      res.setHeader('Content-Type', 'application/json')

      if (!handlerResult) {
        res.statusCode = 400
        res.end(JSON.stringify({
          error: true,
          message: 'No result found'
        }))
      } else {
        res.statusCode = 200
        res.end(JSON.stringify(handlerResult))
      }
    } catch (e) {
      console.error(e)
      res.statusCode = 400
      res.end(JSON.stringify({
        error: true,
        message: e.message,
        errors: e.errors,
      }))
    }
  }
}