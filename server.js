const express = require('express')
const nunjucks = require('nunjucks')
const manifest = require('./manifest')
const server = express()

nunjucks.configure('./', {
  autoescape: true,
  express: server
})

server.use('/images',express.static('images'))
server.use('/assets', express.static('assets'))

server.get('*', (request, response) => {
  response.render('index.html', {
    manifest: manifest
  })
})

server.listen(5000, () => {
  console.log('* Listening on http://localhost:5000')
  console.log('Use Ctrl-C to stop')
})
