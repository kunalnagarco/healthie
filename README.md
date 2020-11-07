# @kunalnagarco/healthie

[![codecov](https://codecov.io/gh/kunalnagar/healthie/branch/master/graph/badge.svg?token=J3NbY7brTh)](https://codecov.io/gh/kunalnagar/healthie)

A health check middleware for Express.js applications.

## Usage

```
const express = require('express')
const app = express()
const { handleHealthCheck } = require('@kunalnagarco/healthie')

app.use(handleHealthCheck())
```

## Result

Visit `/health` and you should see the following:

```
{
  "uptime": 36.883064168, // process.uptime
  "status": "OK"
}
```
