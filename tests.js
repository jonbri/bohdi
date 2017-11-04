const test = require('tape');
const add = require('./lib/add');

test('basic test', function(t) {
    t.equal(add(1,1), 2, 'result is correct');
    t.end();
});
