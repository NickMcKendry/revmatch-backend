import Group from './model';
import { Meetup } from '../meetups'

export const createGroup = async (req, res) => {
  const { name, description, category } = req.body

  if(!name){
    return res.status(400).json({error: true, message: 'Please provide a Name'})
  }  else if(name.length < 5){
    return res.status(400).json({error: true, message: 'Name must be more than 5 characters'})

  }
  if(!description){
    return res.status(400).json({error: true, message: 'Please provide a description'})
  }  else if(description.length < 10){
    return res.status(400).json({error: true, message: 'Description must be more than 10 characters'})

  } else if(description.length > 100){
    return res.status(400).json({error: true, message: 'Description must be less than 100 characters'})

  }


  const group = new Group({name, description})

  try{
    return res.status(200).json({error: false, group: await group.save()})
  } catch(e) {
    return res.status(400).json({error: true, message: 'Error with new Group'})

  }

}

export const createGroupMeetup = async (req, res) => {
  const { title, location, meetuptype, description  } = req.body
  const { groupId } = req.params
  console.log(groupId);

  if(!title){
    return res.status(400).json({error: true, message: 'Please provide a Title'})
  }  else if(title.length < 2){
    return res.status(400).json({error: true, message: 'Title must be more than 2 characters'})

  }
  if(!description){
    return res.status(400).json({error: true, message: 'Please provide a Description'})
  }  else if(description.length < 10){
    return res.status(400).json({error: true, message: 'Description must be more than 10 characters'})

  }

  if(!groupId){
    return res.status(400).json({error: true, message: 'No Group ID found'})
  }


  try{
    const { meetup, group } = await Group.addMeetup(groupId, {title, location, meetuptype, description})
    console.log(meetup);
    return res.status(201).json({error: false, meetup, group })
  } catch(e) {
    console.error(e);
    return res.status(400).json({error: true, message: 'Error with GroupMeetup'})

  }
}






export const getGroupMeetup = async (req, res) => {
  const { groupId } = req.params

  //search for group corresponding to ID

  const group = await Group.findById(groupId)

  if(!group) {
    return res.status(400).json({error: true, message: `No group found with id of ${groupId}`})
  }


  try {
    return res.status(200).json({
      error: false,
      meetups: await Meetup.find({ group : groupId }).populate('group', 'name')
    })
  } catch(e) {
    console.log(e);
    return res.status(400).json({error: true, message: 'Error with GET GroupMeetup'})

  }
}
