var express = require('express');
var router = express.Router();

let messages = [
  {
    text: "Hello There!",
    user: "Amanda",
    posted: new Date()
  },
  {
    text: "Get oughta here!",
    user: "Mikey",
    posted: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Message Board', messages });
});

router.get('/new', (req, res) => {
  res.render('postInput');
});

router.post('/new', function(req, res, next) {
  messages.unshift({
    text: req.body.message,
    user: req.body.userName,
    posted: new Date()
  });
  res.redirect('/');
});

module.exports = router;
