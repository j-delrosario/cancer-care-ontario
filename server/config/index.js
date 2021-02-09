const dotenv = require('dotenv');
const path = require('path')

// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const envFound = dotenv.config({path: path.resolve(__dirname, '.env')});
if (envFound.error) {
  // This error should crash whole process

  throw new Error("Couldn't find .env file!");
}

module.exports = {
  /**
   * Default port
   */
  port: parseInt(process.env.PORT, 10),

  /**
   * URI from whatever cloud database service we end up using
   */
  databaseURL: process.env.MONGODB_URI,

   /**
   * API configs
   */
  api: {
    prefix: '/api',
  },
};