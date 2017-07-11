import mongoose, { Schema } from 'mongoose'

const PostSchema = new Schema({
  image : {
    type: String,
    required: true
  },

  author : {
    type: String,
    required: true
  },

  description: {
    type: String,
    required: true
  },

  partslink : {
    type: String,
    required: false
  }
}, {timestamps: true})


export default mongoose.model('Post', PostSchema)
