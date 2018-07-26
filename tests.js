const test = require('tape');
const add = require('./lib/add');
const sub = require('./lib/sub');
const map = require('./lib/map');

test('test add function', function(t) {
    t.equal(add(1,1), 2, 'result is correct');
    t.end();
});

test('test sub function', function(t) {
    t.equal(sub(1,1), 0, 'result is correct');
    t.end();
});

test('test map function', function(t) {
    var o0 = {
        items: [
            {
                name: 'jon',
                color: 'blue'
            },
            {
                name: 'bill',
                color: 'red'
            }
        ]
    };

    var oExpected = {
        items: [
            {
                mingzi: 'jon',
                yanse: 'blue'
            },
            {
                mingzi: 'bill',
                yanse: 'red'
            }
        ]
    };

    t.deepEqual(map(o0), oExpected, 'result is correct');
    t.end();
});
