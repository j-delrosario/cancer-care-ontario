# `Server side code`

Server is running on port 3001 and is hooked into our MongoDB Atlas cluster.\
To see and manage the database you will want to install [MongoDB Compass](https://www.mongodb.com/try/download/compass).
The link to connect Compass to the cluster is mongodb+srv://admin:<123>@cluster0.hxf94.mongodb.net/test

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode. Hotloading server code.

### `npm run start`

Runs the app in the release mode. No hotloading.

### `npm run ci`

Starts the server in release mode then runs the tests.

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