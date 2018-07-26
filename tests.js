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

test('test map function - simple', function(t) {
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
        ci: [
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

test('test map function - nesting', function(t) {
    var o0 = {
        items: [
            {
                name: 'jon',
                color: 'blue',
                items: [
                    {
                        name: 'tracy',
                        color: 'purple'
                    }
                ]
            },
            {
                name: 'bill',
                color: 'red'
            }
        ]
    };

    var oExpected = {
        ci: [
            {
                mingzi: 'jon',
                yanse: 'blue',
                ci: [
                    {
                        mingzi: 'tracy',
                        yanse: 'purple'
                    }
                ]
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

test('test map function - deep nesting', function(t) {
    var o0 = {
        items: [
            {
                name: 'jojo',
                color: 'olive'
            },
            {
                name: 'jon',
                color: 'blue',
                items: [
                    {
                        name: 'tracy',
                        color: 'purple',
                        items: [
                            {
                                name: 'austin',
                                color: 'black',
                                items: [
                                    {
                                        name: 'jason',
                                        color: 'gold'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                name: 'bill',
                color: 'red',
                items: [
                    {
                        name: 'lucy',
                        color: 'sliver'
                    }
                ]
            }
        ]
    };

    var oExpected = {
        ci: [
            {
                mingzi: 'jojo',
                yanse: 'olive'
            },
            {
                mingzi: 'jon',
                yanse: 'blue',
                ci: [
                    {
                        mingzi: 'tracy',
                        yanse: 'purple',
                        ci: [
                            {
                                mingzi: 'austin',
                                yanse: 'black',
                                ci: [
                                    {
                                        mingzi: 'jason',
                                        yanse: 'gold'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                mingzi: 'bill',
                yanse: 'red',
                ci: [
                    {
                        mingzi: 'lucy',
                        yanse: 'sliver'
                    }
                ]
            }
        ]
    };

    t.deepEqual(map(o0), oExpected, 'result is correct');
    t.end();
});
