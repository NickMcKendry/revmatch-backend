import mongoose from 'mongoose'

export default () => {
  mongoose.Promise = global.Promise
  mongoose.connect('mongodb://heroku_0l2lfc4h:4mo48a65tj778810m5irfjj5f2@ds155192.mlab.com:55192/heroku_0l2lfc4h')
  mongoose.connection
    .once('open', () => console.log('mongodb running'))
    .on('error', err => console.error(err))
}
