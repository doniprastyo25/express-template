import express from 'express'
import helmet from 'helmet'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import mongoConnection from './src/settings/db/mongo'
import config from './src/settings/config'
import user_route from './src/modules/user/routes/user_route'

const app = express()
app.use(helmet());
mongoConnection(
  mongoose,
  config.mongo.uri,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
).connectMongo()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/', user_route)

app.listen(config.port, () => {
  console.log(`Example port ${config.port}`)
})
