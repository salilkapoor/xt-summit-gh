let whitelist = [
  'http://localhost:3001',
  'http://localhost:3002',
  'http://localhost:3003'
]

export let corsOptionsDelegate = function (req, callback) {
  let corsOptions
  if (whitelist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false } // disable CORS for this request
  }
  callback(null, corsOptions) // callback expects two parameters: error and options
}
