const test = require('tape');
const add = require('./lib/add');
const sub = require('./lib/sub');

test('test add function', function(t) {
    t.equal(add(1,1), 2, 'result is correct');
    t.end();
});

test('test sub function', function(t) {
    t.equal(sub(1,1), 0, 'result is correct');
    t.end();
});
