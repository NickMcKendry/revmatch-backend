import { Router } from 'express'
import * as MeetupController from './controller'

import { requireJWTAuth } from '../../utils/requireJWTAuth'

const MeetupRoutes = new Router()

MeetupRoutes.post('/meetups', MeetupController.createMeetup)
MeetupRoutes.get('/meetups', requireJWTAuth, MeetupController.getAllMeetups)



export default MeetupRoutes
