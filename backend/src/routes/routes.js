const express = require("express");
const Router = express.Router();
const read = require('./read')
const readAll = require('./readAll')
const register = require('./create')
const updateData = require('./update')

Router.post("/read", read)

Router.put("/update", updateData)

Router.post("/register", register)

Router.get("/readAll", readAll)

module.exports = Router;