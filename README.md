# Mongoose Relationships

![Relationships](./images/relationships.png)


## Description

This repository is starter code for the Mongoose Relationships lesson utilizing best app structure practices. This creates a functioning Express server with a fully setup db/index, routes, controllers, and a properly structured `server.js`. This replaces the "setup" section of the lesson and the all-in-one `queries.js`.


## Setup

First off, we need to install the packages required for our app.

In your terminal...

```sh
npm install express morgan dotenv mongoose
```

`express` - for our server
`morgan` - for logging
`dotenv` - allows us to access our `.env` file
`mongoose` - let's us set up Schema's and perform CRUD on our db

Next, we need to create a `.env` file.

```sh
touch .env
```

In this file, paste in your MongoDB connection string under the variable name `MONGODB_URI`.

### gitignore

A `.gitignore` has already been setup for you.


## Run Your Server

In your terminal...

```sh
npm start
```

You should see:

```sh
Running Server on Port 3000 . . . 
Successfully connected to MongoDB database . . . 
```

You're now ready to begin the lesson!
