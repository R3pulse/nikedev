var express = require('express')
var router = express.Router()
var mongoose = require('mongoose')
var db = mongoose.connection;
var fs = require('fs')

mongoose.connect('mongodb://localhost/users')
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function() {
  console.log("we're connected!")
})

fs.readdirSync(__dirname + '/../models').forEach(function(filename)  {
  if(~filename.indexOf('.js')) require( __dirname + '/../models/' + filename)
})


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('../public/index.html', { title: 'Express' })
})

router.get('/users', function(req, res)  {
  mongoose.model('users').find(function(err, users) {
    res.send(users)
  })
})

module.exports = router
