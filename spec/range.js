const Range = require('../range.js');

describe("Range", function () {

	var a1 = [1, 4, 5, 7];
	var o1 = {from:10, to:15};
	var o2 = {from:0, to:1, step:0.1};

	it("accepts plain array", function () {
		let r = new Range(a1);
		expect(r.toString()).toEqual('[1,4,5,7]');
	});

	it("accepts array in array", function () {
		let r = new Range([-3, 0, a1, 16]);
		expect(r.toString()).toEqual('[-3,0,1,4,5,7,16]');
	});

	it("can find number precision", function () {
		let r = new Range([]);
		expect(r._getNumPrecision(125)).toEqual(1);
		expect(r._getNumPrecision(125.125)).toEqual(0.001);
	});

	it("can find range step", function () {
		let r = new Range([]);
		expect(r._getRangeStep(125, 126)).toEqual(1);
		expect(r._getRangeStep(125.5, 126.5)).toEqual(0.1);
		expect(r._getRangeStep(1, 8.88)).toEqual(0.01);
		expect(r._getRangeStep(8.88, 9.1)).toEqual(0.01);
	});

	it("accepts plain object", function () {
		let r = new Range(o1);
		expect(r.toString()).toEqual('[10,11,12,13,14,15]');

		r = new Range(o2);
		expect(r.toString()).toEqual('[0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1]');
	});

	it("accepts objects in array", function () {
		let r = new Range([-3, o1, 0, a1, 16, o2]);
		expect(r.toString()).toEqual('[-3,10,11,12,13,14,15,0,1,4,5,7,16,0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1]');
	});
});