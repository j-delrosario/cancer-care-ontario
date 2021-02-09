const config = require('./config');
const loaders = require('./loaders');
const express = require('express');

async function startServer() {

  const app = express();

  await loaders({ expressApp: app });

  app.listen(config.PORT, err => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(`Your server is ready!`);
  });
}

startServer();