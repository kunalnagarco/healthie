# @kunalnagarco/healthie

[![npm](https://badgen.net/npm/v/@kunalnagarco/healthie)](https://www.npmjs.com/package/@kunalnagarco/healthie)

A health check middleware for Express.js applications.

## Installation

```
npm install --save @kunalnagarco/healthie
```

## Usage

```js
const express = require('express');
const app = express();
const { handleHealthCheck } = require('@kunalnagarco/healthie');

app.use(handleHealthCheck());
```

## Result

Visit `/health` and you should see the following:

```json
{
  "uptime": 36.883064168, // process.uptime
  "status": "OK"
}
```
