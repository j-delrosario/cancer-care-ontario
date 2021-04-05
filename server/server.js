const config = require("./config");
const loaders = require("./loaders");
const express = require("express");

async function startServer() {
  let app = express();

  await loaders({ expressApp: app });

  /** Import the various routes **/
  const bodyParser = require("body-parser");
  app.use(bodyParser.json());
  app.use(require("./routes/patients"));

  app.listen(config.port, (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(`Your server is ready! At port: ` + config.port);
  });
}

startServer();
