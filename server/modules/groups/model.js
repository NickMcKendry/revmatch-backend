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

GroupSchema.statics.addMeetup = async function(id, args){
  const Meetup = mongoose.model('Meetup')

  //add group id to meetup the meetup group, this is the author of the event
  const meetup = await new Meetup({ ...args, group: id })

  //find group with id provided by url and push the meetup into the events element
  const group = await this.findByIdAndUpdate(id, { $push: { events: meetup.id } })


  return {
    meetup: await meetup.save({}),
    group

  }








}

export default mongoose.model('Group', GroupSchema)
