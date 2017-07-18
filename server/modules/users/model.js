import mongoose, { Schema } from 'mongoose'

const UserSchema = new Schema({
  email: {
    type: String
  }
})

export default mongoose.model('User', UserSchema)
