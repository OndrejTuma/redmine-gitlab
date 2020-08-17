export default function withErrorHandler(handler) {
  return async (req, res) => {
    try {
      await handler(req, res)
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