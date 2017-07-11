import { Router } from 'express'
import * as GroupController from './controller'

const groupRoutes = new Router()

groupRoutes.post('/groups/new', GroupController.createGroup)
groupRoutes.post('/groups/:groupId/meetups/new', GroupController.createGroupMeetup)
groupRoutes.get('/groups/:groupId/meetups', GroupController.getGroupMeetup)



export default groupRoutes
