const config = require('./config');
const loaders = require('./loaders');
const express = require('express');

async function startServer() {

  let app = express();

  await loaders({ expressApp: app });

  app.listen(config.port, err => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(`Your server is ready! At port: ` + config.port);
  });
}

startServer();