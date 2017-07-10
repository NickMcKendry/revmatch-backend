import express from 'express'
import dbConfig from './config/db'
import middlewareConfig from './config/middleware'
import { PostRoutes } from './modules'

const app = express()

dbConfig()

middlewareConfig(app)

app.use('/api', [PostRoutes])

const PORT = process.env.PORT || 8085

app.listen(PORT, err => {
  if(err){
    console.error(err);
  } else {
    console.log(`App listening on ${PORT}`);
  }
})
