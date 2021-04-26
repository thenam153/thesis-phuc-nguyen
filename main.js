require("dotenv").config()
const express		= require("express")
const cors			= require("cors")
const bodyParser 	= require("body-parser")
const app			= express()
const PORT			= process.env.PORT || 3002
const { getResponse } = require("./server/utils")
const { apiRoute, projectRoute } = require("./server/router")

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use("/api/project", projectRoute)
app.use("/api/api", apiRoute)

app.use(function(error, req, res, next) {
	return res.send(getResponse(404, "Page not found"))
})

app.listen(PORT,function() {
	console.log("Listening!!!", PORT)
})

