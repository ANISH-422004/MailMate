import passport from 'passport'
import { Strategy  } from 'passport-google-oauth20';
import config from '../config/config';
import userService from '../services/user.services';
 

passport.use(new Strategy({
  clientID: config.GOOGLE_CLIENT_ID,
  clientSecret: config.GOOGLE_CLIENT_SECRET,
  callbackURL: config.GOOGLE_REDIRECT_URI,
} , (accessToken , RefreshToken , profile , done)=>{ //reffresh token is used to Verify email task on behalf of out backend

    // userService.createUser(profile.displayName , profile.emails[0].value , profile.id)

}))