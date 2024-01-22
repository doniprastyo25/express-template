function mongoConnection(mongoose, configUrl, options) {
    function connectMongo() {
      mongoose.connect(configUrl, options).then(
        () => {
          console.log('Connected to MongoDB')
        }
      ).catch(
        (error) => {
          console.log('Error connecting to MongoDB:', error.message);
        }
      )
    }

    mongoose.connection.on('connected', () => {
        console.info('Connected to MongoDB!')
    })
    mongoose.connection.on('reconnected', () => {
        console.info('MongoDB reconnected!')
    })
    mongoose.connection.on('error', (error) => {
        console.info('MongoDB reconnected!'      `MongoDB disconnected! Reconnecting in ${
            options.reconnectInterval / 1000
          }s...`)
    })
    return {
        connectMongo
    }
  }

  module.exports = mongoConnection;