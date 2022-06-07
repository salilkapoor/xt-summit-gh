
 module.exports = {
    "*.{ts,tsx,js,jsx}": [
      "yarn run eslint --fix",
      "yarn lint",
      "yarn test"
    ],
    "*.{md,json}": [
      "yarn prettier --check \"**/*.{ts,tsx,yml,html,css,json,md}\""
    ]
  }