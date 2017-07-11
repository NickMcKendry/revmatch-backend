import mongoose, { Schema } from 'mongoose'

const GroupSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    minLength: [3, 'Name must be at least 3 characters long']
  },

  description: {
    type: String,
    required: true,
    minLength: [10, 'Description must be more than 10 characters long'],
    maxLength: [100, 'Description must be less than 100 characters long']
  },

  category: {
    type: String,

  },

  events: [{
    type: Schema.Types.ObjectId,
    ref: 'Meetup'
  }]

}, {timestamps: true})

export default mongoose.model('Group', GroupSchema)
