
// DEPENDENCIES
const express = require("express");
//files
const captainControllers = require('./controllers/logsControllers')
const version2Controllers = require('./v2/controllers/logsController')

//creates the Express app
const cors = require("cors")
const app = express();
app.use(cors())


app.use(express.json())

app.use('/logs', captainControllers)
app.use('/v2/logs', version2Controllers)




//Home route
app.get("/", (request, response) =>{
    console.log('GET request to /')
    response.send("Welcome to Captain's log");
})


// Start (*) Matches anything we've not matched yet
app.get('*', (request, response) =>{
    console.log('GET request to *')
response
.status(404)
.json({Error: 'Page not found!'})
})

// EXPORT
module.exports = app;