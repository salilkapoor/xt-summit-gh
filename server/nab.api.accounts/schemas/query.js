export const Query = `
type Query {
  getAccounts: [Account]
  getAccount(id: Int!): Account
}
`
