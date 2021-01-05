## Giyu

Simple logger for express.

## Install

not published yet

## Configuration

Giyu comes with two formats, `full` or `compact`. The default value being `compact`.

```javascript
const express = require('express')
const giyu = require('giyu')

const app = express()

app.use(giyu())

/*
or
app.use(giyu('full'))
*/

app.get('/', (req, res) => {
    res.status(400).send('hello')
})

app.listen(4333)
```
