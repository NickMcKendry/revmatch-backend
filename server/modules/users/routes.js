import {  Router } from 'express'
import * as UserController from './controller'

const UserRoutes = new Router()

UserRoutes.post('/users/auth0', UserController.loginWithAuth0)



export default UserRoutes
