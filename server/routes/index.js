const express = require('express');
const passportGithub = require('../auth/github');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', (req, res, next) => res.send('Go back and register'));

router.get('/auth/github', passportGithub.authenticate('github', { scope: [ 'read:user' ] }));

router.get('/auth/github/callback', 
  passportGithub.authenticate('github', { failureRedirect: '/login' }), (req, res) => {
    // Successful authentication
    res.json(req.user);

  })

module.exports = router;
