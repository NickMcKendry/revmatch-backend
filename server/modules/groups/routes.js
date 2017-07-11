import { Router } from 'express'
import * as GroupController from './controller'

const groupRoutes = new Router()

groupRoutes.post('/groups/new', GroupController.createGroup)



export default groupRoutes
