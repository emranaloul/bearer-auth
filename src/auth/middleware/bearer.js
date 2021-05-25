'use strict';
const User = require('../models/users-model.js');

module.exports = async (req, res, next) => {
  if (!req.headers.authorization) { next('Invalid Login') }
    //Bearer token.string.l;kasdjf
    try {
        console.log('Auth header: ', req.headers.authorization);
        const token = req.headers.authorization
            .split(' ').pop();
        console.log('token: ', token);

        const user = await User.authenticateWithToken(token);
        console.log('user', user);

        req.user = user;
        next();
    } catch (error) {
        // next('Invalid token');
        res.status(403).send('Invalid Login');
    }
}