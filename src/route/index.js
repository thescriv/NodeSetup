const express = require('express')

const { helloWorld } = require('./controller')

const routerHelloWorld = express.Router()

routerHelloWorld.get('/', helloWorld)

module.exports = { routerHelloWorld }
