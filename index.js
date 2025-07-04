// index.js:

"use strict";

// load all necessary modules
const RestServer = require("./lib/restServer");
const systemRouter = require("./lib/systemRouter");
const UserRouter = require("./lib/user/userRouter");

module.exports = { RestServer, systemRouter, UserRouter };
