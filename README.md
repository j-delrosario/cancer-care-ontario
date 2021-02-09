## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view the front-end in a browser.

The page and the server will reload if you make edits.

Server needs a MongoDB connection, and is defaulted to running on localhost:27017.\
Run "C:/Program Files/MongoDB/Server/4.4/bin/mongod.exe" (or w/e you installed MongoDB to) to run the MongoDB daemon locally.

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