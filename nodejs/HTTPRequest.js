// Perform a GET Request

const https = require('https')
var options = {
  hostname: 'google.com',
  port: 443,
  path: '/todos',
  method: 'GET'
}

var req = https.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`)

  res.on('data', d => {
    process.stdout.write(d)
  })
})

req.on('error', error => {
  console.error(error)
})

req.end()


// Perform a POST Request

const data = new TextEncoder().encode(
  JSON.stringify({
    todo: 'Buy the milk 🍼'
  })
)

options = {
  hostname: 'google.com',
  port: 443,
  path: '/todos',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length
  }
}

req = https.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`)

  res.on('data', d => {
    process.stdout.write(d)
  })
})

req.on('error', error => {
  console.error(error)
})

req.write(data)
req.end()

// PUT and DELETE requests use the same POST request format -
//  you just need to change the options.method value to the appropriate method.