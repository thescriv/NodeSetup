const express = require('express')

const { helloWorld } = require('./controller')

const routerHelloWorld = express.Router()

routerHelloWorld.use('/', (_req, _res, next) => {
  next()
})

routerHelloWorld.get('/', helloWorld)

module.exports = { routerHelloWorld }
