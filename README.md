[![Maintainability](https://api.codeclimate.com/v1/badges/50fce303dcfd73c05a16/maintainability)](https://codeclimate.com/github/tejiri4/buy-bitcoins-challenge/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/50fce303dcfd73c05a16/test_coverage)](https://codeclimate.com/github/tejiri4/buy-bitcoins-challenge/test_coverage) [![Build Status](https://travis-ci.com/tejiri4/buy-bitcoins-challenge.svg?branch=develop)](https://travis-ci.com/tejiri4/buy-bitcoins-challenge)

# buy-bitcoins-challenge
A simple API to buy or sell coin

# Tech Stack

- Nodejs
- Expressjs
- Graphql

# Instruction

- Git clone the repo

- Cd into the directory cloned

- Run npm install

- Run npm start:dev to start the development server

- Run npm test for testing

# Query Example

``` 
query calculatePrice {
  calculatePrice(type: buy, margin: 0.2, exchangeRate: 362.73)
}
```

# Validation

- Margin must be between 0 and 100.

- exchange rate is the amount of Naira(NGN) that makes 1USD

- type can either be buy or sell


# Links 

GraphQl Playground: https://coin-buy-sell-staging.herokuapp.com/graphql