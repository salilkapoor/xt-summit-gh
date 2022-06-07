import Data from '../../data/getAccounts.json' assert { type: 'json' }
import { AccountsLoggers } from '../loggers/index.js'

export function getAccount({ id }) {
  AccountsLoggers.Info(`Get Account query is being called on ${id}.`)
  return Data.data.getAccounts.find((account) => account.accountNumber === id)
}
