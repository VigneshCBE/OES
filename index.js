var cryptoJSON = require('crypto-json')

var cipher = 'camellia-128-cbc'
var passKey = '394rwe78fudhwqpwriufdhr8eh'
var encoding = 'hex'

var object = require('./db.json')
 
var encrypted = cryptoJSON.encrypt(object, passKey, {
  algorithm: cipher,
  encoding: encoding
})


console.log(encrypted)

module.exports = () => {
  return encrypted
}