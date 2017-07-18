import passport from 'passport'
import { Strategy as JWTStrategy, ExtractJwt } from 'passport-jwt'

import User from '../model'
import config from '../../../config/config'


const jwtOpts = {
  //Tell Passport to take the jwt token from auth headers
  jwtFromRequest: ExtractJwt.fromAuthHeaders('Authorization'),
  secretOrKey: config.JWT_SECRET,

}

const jwtStrategy = new JWTStrategy(jwtOpts, async (payload, done) => {
  try{
    const user = await User.findById(payload.id)

    if(user) {
      done(null, user)
    } else {
      done(null, false)
    }
  } catch(e) {
    return done(e, false)
  }
})


passport.use(jwtStrategy)
