"use strict";

const test = require('ava');
const accessGate = require('../src/plugin');

test('Extracting parameter: Resize', t => {

    console.info(accessGate);


    t.deepEqual('300x300', '300x300');
});

