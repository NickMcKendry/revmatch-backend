import {  Router } from 'express'
import * as PostController from './controller'

const PostRoutes = new Router()

PostRoutes.post('/posts', PostController.createPost)
PostRoutes.get('/posts', PostController.getAllPosts)



export default PostRoutes
