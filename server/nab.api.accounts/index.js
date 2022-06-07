import express, { json } from 'express'
import { graphqlHTTP } from 'express-graphql'
import { buildSchema } from 'graphql'
import cors from 'cors'

import { AccountsLoggers } from './loggers/index.js'

import { SCHEMA } from './schemas/index.js'
import { getAccount, getAccounts } from './resolvers/index.js'

import { corsOptionsDelegate } from './security/cors/index.js'

const app = express()

// Construct a schema, using GraphQL schema language
const schema = buildSchema(SCHEMA)

// The root provides a resolver function for each API endpoint
const root = {
  getAccounts: getAccounts,
  getAccount: getAccount
}

app.use(
  '/graphql/v1',
  cors(corsOptionsDelegate),
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true
  })
)

app.get('/', (req, res) => {
  res.send('Welcome to Accounts micro-services.')
})

const PORT = process.env.PORT ?? 3000

app.listen(PORT, () => {
  AccountsLoggers.Info(`Accounts micro-service is up and running on ${PORT}.`)
})
