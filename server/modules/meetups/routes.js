import { Router } from 'express'
import * as MeetupController from './controller'

const MeetupRoutes = new Router()

MeetupRoutes.post('/meetups', MeetupController.createMeetup)
MeetupRoutes.get('/meetups', MeetupController.getAllMeetups)



export default MeetupRoutes
