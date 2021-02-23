## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view the front-end in a browser.

The page and the server will reload if you make edits.

Server is running on port 3001 and is hooked into our MongoDB Atlas cluster.\
To see and manage the database you will want to install [MongoDB Compass](https://www.mongodb.com/try/download/compass).
The link to connect Compass to the cluster is mongodb+srv://admin:<123>@cluster0.hxf94.mongodb.net/test

### `npm run install-dependencies`

Dependencies are separated between client and server-side.
Installs all dependencies in the root, client, and server.

## Directory Structure

```
proj-RESTfulfriends/
├── bin/                # any binaries for distribution
├── client/             # all front-end code
└── server/             # all back-end code
```

See README in client and server folders for their respective folder structures.

## TODO: Add summary of the project