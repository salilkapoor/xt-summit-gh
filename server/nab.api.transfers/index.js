import express from 'express'
import cors from 'cors'

import { corsOptionsDelegate } from './security/cors/index.js'

import { TransfersRoute } from './api/transfers.js'

import { TransfersLoggers } from './loggers/index.js'

const app = express()

app.use(cors(corsOptionsDelegate))

app.use(express.json())

app.use('/api/transfers', TransfersRoute)

app.get('/', (req, res) => {
  res.send('Welcome to Transfers micro-services.')
})

const PORT = process.env.PORT ?? 3004

app.listen(PORT, () => {
  TransfersLoggers.Info(`Transfers micro-service is up and running on ${PORT}.`)
})
