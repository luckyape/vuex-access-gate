"use strict";

const test = require("ava");
const accessGate = require('../src/plugin');

/*
const sharpMethodResize    = require('../lib/sharp-methods/resize');
const sharpMethodRotate    = require('../lib/sharp-methods/rotate');
const sharpMethodExtend    = require('../lib/sharp-methods/extend');
const sharpMethodGreyscale = require('../lib/sharp-methods/greyscale');
const sharpMethodCrop      = require('../lib/sharp-methods/crop');
const sharpMethodJpeg      = require('../lib/sharp-methods/jpeg');
*/

test("Validate: resize params", t => {
    
	let sizeParams = '200xaa';

    const error = t.throws(() => {
        console.info(accessGate);
        sizeParams.concat(sizeParams);
    }, Error);

    t.is(error.message, 'Resize parameter is not a number.');
});
/*
test("Validate: Rotate Params", t => {
    
	let rotateParams = '-200';

    const error = t.throws(() => {
        sharpMethodRotate.validationAndSetParams(rotateParams);
    }, Error);

    t.is(error.message, 'The angle must be a positive/negative multiple of 90.');
});

test("Validate: Extend Params", t => {
    
	let extendParams = '10+20';

    const error = t.throws(() => {
        sharpMethodExtend.validationAndSetParams(extendParams);
    }, Error);

    t.is(error.message, 'Extend: the number of parameters is incorrect. Must be 4.');
});

test("Validate: Extend - Some parameter is not a number ", t => {
    
	let extendParams = '10+20+20+a';

    const error = t.throws(() => {
        sharpMethodExtend.validationAndSetParams(extendParams);
    }, Error);

    t.is(error.message, 'Extend: Some parameter is not a number.');
});

test("Validate: Greyscale - Some parameter is not a number", t => {
    
	let greyscaleParams = 'abc';

    const error = t.throws(() => {
        sharpMethodGreyscale.validationAndSetParams(greyscaleParams);
    }, Error);

    t.is(error.message, 'Greyscale: Parameter is not a number.');
});

test("Validate: Greyscale - Parameter is not 0 (zero) or 1 (one)", t => {
    
	let greyscaleParams = '2';

    const error = t.throws(() => {
        sharpMethodGreyscale.validationAndSetParams(greyscaleParams);
    }, Error);

    t.is(error.message, 'Greyscale: Parameter is not 0 (zero) or 1 (one).');
});

test("Validate: Crop - The attribute is not accept.", t => {
    
	let cropParams = 'centrerrer';

    const error = t.throws(() => {
        sharpMethodCrop.validationAndSetParams(cropParams);
    }, Error);

    t.is(error.message, 'Crop: The attribute is not accept.');
});

test("Validate: Jpeg - Quality parameter is not a number.", t => {
    
	let jpegParams = '12s';

    const error = t.throws(() => {
        sharpMethodJpeg.validationAndSetParams(jpegParams);
    }, Error);

    t.is(error.message, 'Quality parameter is not a number.');
});

test("Validate: Jpeg - The value should be between 1 to 100.", t => {
    
	let jpegParams = -10;

    const error = t.throws(() => {
        sharpMethodJpeg.validationAndSetParams(jpegParams);
    }, Error);

    t.is(error.message, 'Invalid quality parameter. The value should be between 1 to 100.');
});

test("Validate: Jpeg - The value should be between 1 to 100 - v2", t => {
    
	let jpegParams = 103;

    const error = t.throws(() => {
        sharpMethodJpeg.validationAndSetParams(jpegParams);
    }, Error);

    t.is(error.message, 'Invalid quality parameter. The value should be between 1 to 100.');
});

*/















