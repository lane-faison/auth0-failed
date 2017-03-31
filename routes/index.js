var express = require('express');
var passport = require('passport');
var router = express.Router();

var env = {
  AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
  AUTH0_DOMAIN: process.env.AUTH0_DOMAIN,
  AUTH0_CALLBACK_URL: 'http://localhost:8000/callback'
};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200).send('hello')
  // res.render('index', { title: 'Express', env: env });
});

router.get('/login',
  function(req, res){
    res.render('login', { env: env });
  });

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

router.get('/callback',
  passport.authenticate('auth0', { failureRedirect: '/url-if-something-fails' }),
  function(req, res) {
    console.log(req.user)
    res.redirect('http://localhost:8000/user.html')
    // res.redirect(req.session.returnTo || 'http://localhost:8000/user.html');

  });


module.exports = router;
