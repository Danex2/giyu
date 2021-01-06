## Giyu

Simple logger for express.

## Install

not published yet

## Configuration

By default giyu will display the long version of a log.  
![Full log for giyu](https://i.imgur.com/OPElioQ.png)

To display a shorter version simply pass in the `compact` option.

```javascript
const express = require('express')
const giyu = require('giyu')

const app = express()

app.use(giyu())

/*
or
app.use(giyu('compact'))
*/

app.get('/', (req, res) => {
    res.status(400).send('hello')
})

app.listen(4333)
```
