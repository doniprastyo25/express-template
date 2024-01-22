require('dotenv').config();

const config =  {
    mongo: {
      uri: process.env.MONGO_URL
    },
    port: process.env.PORT
  };

module.exports = config