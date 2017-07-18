import passport from 'passport'

import '../modules/users/utils/passport'

export const requireJWTAuth = passport.authenticate('jwt', { session: false })
