/*global module, require */

var QuantityMatchers = function () {
	'use strict';
	var Qty = require('js-quantities');
	this.quantityToEqual = function (expected) {
		var expectation = this,
			actualQuantity = new Qty(expectation.actual),
			expectedQuantity = new Qty(expected);
		expectation.addAssertion(actualQuantity.eq(expectedQuantity), expected);
		return expectation;
	};
	this.quantityToBeLessThan = function (expected) {
		var expectation = this,
			actualQuantity = new Qty(expectation.actual),
			expectedQuantity = new Qty(expected);
		expectation.addAssertion(actualQuantity.lt(expectedQuantity), expected);
		return expectation;
	};
	this.quantityToBeGreaterThan = function (expected) {
		var expectation = this,
			actualQuantity = new Qty(expectation.actual),
			expectedQuantity = new Qty(expected);
		expectation.addAssertion(actualQuantity.gt(expectedQuantity), expected);
		return expectation;
	};
	this.quantityToBeLessThanOrEqual = function (expected) {
		var expectation = this,
			actualQuantity = new Qty(expectation.actual),
			expectedQuantity = new Qty(expected);
		expectation.addAssertion(actualQuantity.lte(expectedQuantity), expected);
		return expectation;
	};
	this.quantityToBeGreaterThanOrEqual = function (expected) {
		var expectation = this,
			actualQuantity = new Qty(expectation.actual),
			expectedQuantity = new Qty(expected);
		expectation.addAssertion(actualQuantity.gte(expectedQuantity), expected);
		return expectation;
	};
};
module.exports = new QuantityMatchers();
