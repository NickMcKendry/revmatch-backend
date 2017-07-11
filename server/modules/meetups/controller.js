import Meetup from './model'

export const createMeetup = async (req, res) => {
  console.log('req.body', req.body);
  const { name, location, meetuptype, date } = req.body
  const newMeetup = new Meetup({ name, location, meetuptype, date })

  try{
    console.log('hello');
    return res.status(201).json({ meetups: await newMeetup.save()})
  } catch (e) {
    console.log('err');
    return res.status(e.status).json({error: true, message: "Error with Meetup"})
  }
}

export const getAllMeetups = async (req, res) => {
  try {
    return res.status(200).json({ meetups: await Meetup.find({}) })
  } catch(e) {
    return res.status(e.status).json({error: true, message: "Error with Meetup"})
  }
}
