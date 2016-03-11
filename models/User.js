//User model
var mongoose = require('mongoose')

var userScehma = new mongoose.Schema({

  email:{type:String, required:true, unique: true},

  password:{type:String, required: true, unique: true}
})

var User = mongoose.model('User', userScehma)

module.exports = User
