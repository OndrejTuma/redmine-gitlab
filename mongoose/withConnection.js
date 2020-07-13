import mongoose from 'mongoose'

export default function (handler) {
  return async function (req, res) {
    if (!mongoose.connection) {
      await mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: process.env.DB_NAME,
      })
      mongoose.connection.on('error', err => console.error('Mongoose Error:', err))
      mongoose.connection.once('open', () => console.info('Mongoose is connected'))
    }

    return handler(req, res)
  }
}