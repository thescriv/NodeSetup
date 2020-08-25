async function middleware(_req, _res, next) {

  await next()
}

module.exports = { middleware }
