var express = require('express')
var app = express()

var server = null


function handlePing(req, res) {
    res.status(200).send('pong')
}

function handleDummy(req, res) {
    res.status(200).json({})
}

// Start castleman
function start(port) {
    app.get('/artifacts', handleDummy)
    app.get('/artifacts/:artifactId', handleDummy)
    app.put('/artifacts/:artifactId', handleDummy)

    app.get('/targets', handleDummy)
    app.get('/targets/:targetId', handleDummy)
    app.put('/targets/:targetId', handleDummy)
    app.post('/targets/:targetId/scan', handleDummy)
    app.post('/targets/:targetId/run/:artifactId', handleDummy)
    
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