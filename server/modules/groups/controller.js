import Group from './model';

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
  const { title, description } = req.body
}
