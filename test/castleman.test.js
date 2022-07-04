const request = require('request')

var castleman = require('../castleman')
var server = castleman.start()

test('ping', () => {
    var addr = server.address()
    request(`http://${addr.address}:${addr.port}`, { json: true }, (err, res, body) => {
        expect(err).toBe(false);
    });
    expect(1+2).toBe(3)
})

castleman.stop()