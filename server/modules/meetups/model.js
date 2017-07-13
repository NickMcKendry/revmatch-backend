import mongoose, { Schema } from 'mongoose'

const MeetupSchema = new Schema({
  title : {
    type: String,
    required: true,
    minLength: [2, '2 characters minimum']
  },

  location : {
    type: String,
    required: true
  },

  meetuptype : {
    type: String,
    required: true
  },

  description : {
    type: String,
    required: true,
    minLength: [10, '10 characters minimum']
  },



  group : {
    type: Schema.Types.ObjectId,
    ref: "Group"
  }


}, {timestamps: true})


export default mongoose.model('Meetup', MeetupSchema)
