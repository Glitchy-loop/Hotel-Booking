const express = require('express')
const cors = require('cors')
require('dotenv').config()

const { MongoClient } = require('mongodb')

const dbServer = new MongoClient(process.env.MONGODB_URL)

const app = express()

app.use(express.json())
app.use(cors())

app.get('/rooms/:guests', async (req, res) => {
  console.log(req.params.guests)
  try {
    await dbServer.connect()
    const data = await dbServer
      .db('hotelbooking')
      .collection('rooms')
      .find({ room_capacity: { $gte: Number(req.params.guests) } })
      .toArray()

    return res.send(data)
  } catch (err) {
    console.log(err)
    return res.status(500).send(err)
  }
})

const port = process.env.PORT || 8080

app.listen(port, () => console.log(`Server is running on port ${port}`))
