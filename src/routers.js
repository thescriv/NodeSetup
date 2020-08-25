const { routerHelloWorld } = require('./route/HelloWorld')

module.exports = [
  {
    path: 'helloWorld',
    router: routerHelloWorld,
  },
]
