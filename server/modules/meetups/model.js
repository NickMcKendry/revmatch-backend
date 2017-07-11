import mongoose, { Schema } from 'mongoose'

const MeetupSchema = new Schema({
  name : {
    type: String,
    required: true
  },

  location : {
    type: String,
    required: true
  },

  meetuptype : {
    type: String,
    required: true
  },


}, {timestamps: true})


export default mongoose.model('Meetup', MeetupSchema)
