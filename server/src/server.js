import express from 'express'
import passport from 'passport'
import storage from 'node-persist'
import {Strategy} from 'passport-github'
import { config } from './config'


storage.initSync()

const app = express()


app.use(passport.initialize())
app.use(passport.session())

passport.use(
  new Strategy({
    clientID: config.github.clientId,
    clientSecret: config.github.clientSecret,
    callbackURL: `http://${config.host}:${config.port}/login/callback`,
  },
  (accessToken, refreshToken, profile, done) => {
    let user = profile;
    user.accessToken = accessToken;
    return done(null, user);
  }
))

passport.serializeUser((user, done) =>
  storage.setItem(`user_${user.id}`, user)
    .then(() => done(null, user.id))
)

passport.deserializeUser((id, done) =>
  done(null, storage.getItem(`user_${id}`))
)

app.get('/login', passport.authenticate('github'), (req, res) => {
    console.log('login')
   // console.log(req)
})
app.get('/login/callback',  passport.authenticate(
        'github', { failureRedirect: '/login' }
    ),
    (req, res) => {
        res.redirect(`rn://${req.user.accessToken}`)
        console.log('callback')
})

const findUser = (predicate) => {
    return storage.values().find(predicate)
}


app.get('/user/:accessToken', (req, res) => {
  const user = findUser(u => u.accessToken === req.params.accessToken)
  if (user) {
    res.status(200).send(formatUser(user._json))
  }
  res.status(404).send()
});


const formatUser = (user) => ({
  login: user.login,
  id: user.id,
  avatar_url: user.avatar_url,
})

app.listen(config.port, () => {
    console.log(`Listening on port ${config.port}`)
})


