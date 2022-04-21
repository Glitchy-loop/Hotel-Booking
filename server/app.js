const express = require('express')
const cors = require('cors')
require('dotenv').config()

const { MongoClient } = require('mongodb')

const dbServer = new MongoClient(process.env.MONGODB_URL)

const app = express()

app.use(express.json())
app.use(cors())

app.get('/', async (req, res) => {
  try {
    await dbServer.connect()
    console.log('Connected')

    return res.send('OK !')
  } catch (err) {
    console.log(err)
    return res.status(500).send(err)
  }
})

const port = 8080

app.listen(port, () => console.log(`Server is running on port ${port}`))
