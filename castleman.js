var express = require('express')
var app = express()

var server = null


function response(req, res) {
    res.set('Content-Type', 'text/html')
    res.status(200).send("You didn't say the magic word")
}

// Start castleman
function start(port) {
    app.get('/', response)
    
    server = app.listen(port, function() {
        var addr = server.address()
        console.log('Hosting amateur hour at http://%s:%s', addr.address, addr.port)
    })
}

// Stop castleman
function stop() {
    if (server) server.close(function() {
        console.log('Boo! Get off the stage!')
    })

    server = null
}

// Specify module exports
module.exports = {
    start: start,
    stop: stop
}