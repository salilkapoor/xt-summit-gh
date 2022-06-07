import Data from '../../data/getAccounts.json' assert { type: 'json' }
import { AccountsLoggers } from '../loggers/index.js'

export function getAccounts() {
  AccountsLoggers.Info('Get Accounts query is being called.')
  return Data.data.getAccounts
}
