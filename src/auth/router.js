'use strict';

const express = require('express');
const authRouter = express.Router();
const User = require('./models/users-model.js');
const basicAuth = require('./middleware/basic.js')
const bearerAuth = require('./middleware/bearer.js')
const session = require('express-session')
// const {app , start} = require('../server');
// const server = require('../server');
const app = express();

app.use(session({
  secret: 'hey',
  resave: false,
  saveUninitialized: true, 
  cookie: {maxAge: 60000}
}))

authRouter.post('/signup', async (req, res, next) => {
 req.session  = req.body 
  try {
    console.log("req.session", req.session)
    // console.log(req.body)
    let user = new User(req.session);
    // console.log('user', user)
    const userRecord = await user.save();
    // console.log(' userRecord.token',  userRecord.token)
    const output = {
      user: userRecord,
      token: userRecord.token
    };

    // console.log('output', output)
    res.status(201).json(output);
  } catch (e) {
    next(e.message)
  }
});

authRouter.post('/signin', basicAuth, (req, res, next) => {
  console.log('req.sessionsignin', req.session)
  res.cookie('token', req.user.token , { expires: new Date(Date.now() + 60000), httpOnly: true } );
  const user = {
    user: req.user,
    token: req.user.token
  };
  res.status(200).json(user);
});

authRouter.get('/users', bearerAuth, async (req, res, next) => {
  const users = await User.find({});
  const list = users.map(user => user.username);
  res.status(200).json(list);
});

authRouter.get('/secret', bearerAuth, async (req, res, next) => {
  res.status(200).send("Welcome to the secret area!")
});


module.exports = authRouter;
