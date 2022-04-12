var castleman = require('../castleman')
castleman.start()

test('ping', () => {
    expect(1+2).toBe(3)
})

castleman.stop()