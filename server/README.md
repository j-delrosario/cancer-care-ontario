# `Server side code`

Server needs a MongoDB connection, and is defaulted to running on localhost:27017.\
Run "C:/Program Files/MongoDB/Server/4.4/bin/mongod.exe" (or w/e you installed MongoDB to) to run the MongoDB daemon locally.

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode. Hotloading server code.

### `npm run start`

Runs the app in the release mode. No hotloading.

## `Directory Structure`
```
server/
├── api/                # api acts as route controller, keep business logic in services
│   ├── routes/
│   └── index.js
├── config/             # configuration files and environment variables
├── ├── .env
│   └── index.js
│── loaders/            # contains all the startup processes for our server
│   ├── express.js
│   ├── mongoose.js
│   └── index.js
├── models/             # contains all the mongoose schemas
├── services/           # service class layer, all business logic
└── server.js           # entry point for the server application
```