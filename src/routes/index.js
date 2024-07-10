const express = require("express")
const person = require("./personRoutes.js")

module.exports = (app) => {
    app.use(
        express.json(),
        person
    )
}