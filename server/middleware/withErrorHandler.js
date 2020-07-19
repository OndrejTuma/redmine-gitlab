export default function withErrorHandler(handler) {
  return async (req, res) => {
    try {
      const handlerResult = await handler(req, res)

      res.statusCode = 200
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify(handlerResult))

      return handlerResult
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