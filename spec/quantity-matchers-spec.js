/*global describe, it, beforeEach, require, expect */
var quantityMatchers = require('../src/quantity-matchers'),
	ExpectationBuilder = require('daspec-core').ExpectationBuilder;
describe('Quantity matchers', function () {
	'use strict';
	var underTest;
	beforeEach(function () {
		underTest = new ExpectationBuilder([], quantityMatchers);
	});
	describe('quantityToEqual', function () {
		it('adds an assertion for two quantities with units', function () {
			var result = underTest.expect('10 m').quantityToEqual('1000 cm');
			expect(result.assertions.length).toBe(1);
			expect(result.assertions[0].passed).toBe(true);
			expect(result.assertions[0].expected).toEqual('1000 cm');
			expect(result.assertions[0].actual).toEqual('10 m');
		});
		it('correctly reports failures', function () {
			var result = underTest.expect('10 ft').quantityToEqual('1000 cm');
			expect(result.assertions.length).toBe(1);
			expect(result.assertions[0].passed).toBe(false);
			expect(result.assertions[0].expected).toEqual('1000 cm');
			expect(result.assertions[0].actual).toEqual('10 ft');
		});
		it('can be prefixed with .not', function () {
			var result = underTest.expect('10 ft').not.quantityToEqual('1000 cm');
			expect(result.assertions.length).toBe(1);
			expect(result.assertions[0].passed).toBe(true);
			expect(result.assertions[0].expected).toEqual('1000 cm');
			expect(result.assertions[0].actual).toEqual('10 ft');
		});
	});
	describe('quantityToBeLessThan', function () {
		it('adds an assertion for two quantities with units', function () {
			var result = underTest.expect('9 m').quantityToBeLessThan('1000 cm');
			expect(result.assertions.length).toBe(1);
			expect(result.assertions[0].passed).toBe(true);
			expect(result.assertions[0].expected).toEqual('1000 cm');
			expect(result.assertions[0].actual).toEqual('9 m');
		});
		it('correctly reports when equal', function () {
			var result = underTest.expect('10 m').quantityToBeLessThan('1000 cm');
			expect(result.assertions.length).toBe(1);
			expect(result.assertions[0].passed).toBe(false);
			expect(result.assertions[0].expected).toEqual('1000 cm');
			expect(result.assertions[0].actual).toEqual('10 m');
		});
		it('correctly reports failures', function () {
			var result = underTest.expect('10 ft').quantityToBeLessThan('100 cm');
			expect(result.assertions.length).toBe(1);
			expect(result.assertions[0].passed).toBe(false);
			expect(result.assertions[0].expected).toEqual('100 cm');
			expect(result.assertions[0].actual).toEqual('10 ft');
		});
		it('can be prefixed with .not', function () {
			var result = underTest.expect('10 ft').not.quantityToBeLessThan('100 cm');
			expect(result.assertions.length).toBe(1);
			expect(result.assertions[0].passed).toBe(true);
			expect(result.assertions[0].expected).toEqual('100 cm');
			expect(result.assertions[0].actual).toEqual('10 ft');
		});
	});
	describe('quantityToBeGreaterThan', function () {
		it('adds an assertion for two quantities with units', function () {
			var result = underTest.expect('11 m').quantityToBeGreaterThan('1000 cm');
			expect(result.assertions.length).toBe(1);
			expect(result.assertions[0].passed).toBe(true);
			expect(result.assertions[0].expected).toEqual('1000 cm');
			expect(result.assertions[0].actual).toEqual('11 m');
		});
		it('correctly reports when equal', function () {
			var result = underTest.expect('10 m').quantityToBeGreaterThan('1000 cm');
			expect(result.assertions.length).toBe(1);
			expect(result.assertions[0].passed).toBe(false);
			expect(result.assertions[0].expected).toEqual('1000 cm');
			expect(result.assertions[0].actual).toEqual('10 m');
		});
		it('correctly reports failures', function () {
			var result = underTest.expect('100 cm').quantityToBeGreaterThan('10 ft');
			expect(result.assertions.length).toBe(1);
			expect(result.assertions[0].passed).toBe(false);
			expect(result.assertions[0].expected).toEqual('10 ft');
			expect(result.assertions[0].actual).toEqual('100 cm');
		});
		it('can be prefixed with .not', function () {
			var result = underTest.expect('1m').not.quantityToBeGreaterThan('10 ft');
			expect(result.assertions.length).toBe(1);
			expect(result.assertions[0].passed).toBe(true);
			expect(result.assertions[0].expected).toEqual('10 ft');
			expect(result.assertions[0].actual).toEqual('1m');
		});
	});
	describe('quantityToBeLessOrEqualThan', function () {
		it('adds an assertion for two quantities with units', function () {
			var result = underTest.expect('9 m').quantityToBeLessThanOrEqual('1000 cm');
			expect(result.assertions.length).toBe(1);
			expect(result.assertions[0].passed).toBe(true);
			expect(result.assertions[0].expected).toEqual('1000 cm');
			expect(result.assertions[0].actual).toEqual('9 m');
		});
		it('correctly reports when equal', function () {
			var result = underTest.expect('10 m').quantityToBeLessThanOrEqual('1000 cm');
			expect(result.assertions.length).toBe(1);
			expect(result.assertions[0].passed).toBe(true);
			expect(result.assertions[0].expected).toEqual('1000 cm');
			expect(result.assertions[0].actual).toEqual('10 m');
		});
		it('correctly reports failures', function () {
			var result = underTest.expect('10 ft').quantityToBeLessThanOrEqual('100 cm');
			expect(result.assertions.length).toBe(1);
			expect(result.assertions[0].passed).toBe(false);
			expect(result.assertions[0].expected).toEqual('100 cm');
			expect(result.assertions[0].actual).toEqual('10 ft');
		});
		it('can be prefixed with .not', function () {
			var result = underTest.expect('10 ft').not.quantityToBeLessThanOrEqual('100 cm');
			expect(result.assertions.length).toBe(1);
			expect(result.assertions[0].passed).toBe(true);
			expect(result.assertions[0].expected).toEqual('100 cm');
			expect(result.assertions[0].actual).toEqual('10 ft');
		});

	});
	describe('quantityToBeGreaterOrEqualThan', function () {
		it('adds an assertion for two quantities with units', function () {
			var result = underTest.expect('11 m').quantityToBeGreaterThanOrEqual('1000 cm');
			expect(result.assertions.length).toBe(1);
			expect(result.assertions[0].passed).toBe(true);
			expect(result.assertions[0].expected).toEqual('1000 cm');
			expect(result.assertions[0].actual).toEqual('11 m');
		});
		it('correctly reports when equal', function () {
			var result = underTest.expect('10 m').quantityToBeGreaterThanOrEqual('1000 cm');
			expect(result.assertions.length).toBe(1);
			expect(result.assertions[0].passed).toBe(true);
			expect(result.assertions[0].expected).toEqual('1000 cm');
			expect(result.assertions[0].actual).toEqual('10 m');
		});
		it('correctly reports failures', function () {
			var result = underTest.expect('10 ft').quantityToBeGreaterThanOrEqual('1000 cm');
			expect(result.assertions.length).toBe(1);
			expect(result.assertions[0].passed).toBe(false);
			expect(result.assertions[0].expected).toEqual('1000 cm');
			expect(result.assertions[0].actual).toEqual('10 ft');
		});
		it('can be prefixed with .not', function () {
			var result = underTest.expect('10 ft').not.quantityToBeGreaterThanOrEqual('1000 cm');
			expect(result.assertions.length).toBe(1);
			expect(result.assertions[0].passed).toBe(true);
			expect(result.assertions[0].expected).toEqual('1000 cm');
			expect(result.assertions[0].actual).toEqual('10 ft');
		});

	});

});

