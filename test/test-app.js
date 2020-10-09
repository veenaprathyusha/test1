//const { expect } = require('chai');

var should = require('chai').should()
var foo = 'bar'
var beverages = { tea: ['chai', 'matcha', 'oolong'] };

describe('Equality check', () => {
    it('Equals to ', () => {
        foo.should.be.a('string')
    });
});


/*var expect = require('chai').expect()
var foo='bar'
var beverages = { tea: ['chai', 'matcha', 'oolong'] };
describe('Equality check', () => {
    it('Equals to ', () => {
        //foo.should.be.a('string')
        foo.to.be.a('string');

    });*/


//expect(beverages).to.have.property('tea').with.length(3);

/*var assert = require('chai').assert;

describe('Phase 1 testing', () => {
    before(() => {
        console.log("Before is called")
    });

    beforeEach(() => {
        console.log("Before each is called")
    });

    it('should return -1 when the value is not present', () => {
        assert.equal(-1, [1, 2, 3].indexOf(5));
    });
    it('another test case', () => {
        assert.equal(-1, [1, 2, 3].indexOf(0));
    });

    it('pending......');

    afterEach(() => {
        console.log("After each is callled")
    });
    after(() => {
        console.log("After is called")
    });
});


let sum = require('../sum.js').sum;
let expect = require("chai").expect;
 
 
describe('Sum of Numbers tests', () => {
    describe('General tests', () => {
        it('should be a function', () => {
            expect(typeof sum).to.equal('function');            
        });
    });
 
    describe('Function tests', () => {
        it('should return zero for a zero length input array', () => {
            expect(sum([])).to.equal(0);            
        });
 
        it('should return the member value for a one member array', () => {
            expect(sum([1])).to.equal(1);            
        });
 
        it('should return the member value for a one member array when given as string', () => {
            expect(sum(['1'])).to.equal(1);            
        });
 
        it('should add whole number arrays', () => {
            expect(sum([1,2,3])).to.equal(6);            
        });
 
        it('should add whole number arrays including negative numbers', () => {
            expect(sum([-1,2,3])).to.equal(4);            
        });
 
        it('should add whole number arrays including strings', () => {
            expect(sum([-1,'2',3])).to.equal(4);            
        });
 
        it('should add fractions', () => {
            expect(sum([1.1,2.2,3])).to.be.closeTo(6.3,0.0001);            
        });
 
        //it('should not add non-arrays', () => {
        //    expect(sum(1,2,3)).to.be.NaN;           
        //}); 
 
        it('should not add arrays of invalid data', () => {
            expect(sum(['pesho','gosho'])).to.be.NaN;           
        });
    });
});
 

var assert = require('chai').assert;

function add() {
  return Array.prototype.slice.call(arguments).reduce(function(prev, curr) {
    return prev + curr;
  }, 0);
}

describe('add()', function() {
  var tests = [
    {args: [1, 2],       expected: 3},
    {args: [1, 2, 3],    expected: 6},
    {args: [1, 2, 3, 4], expected: 10}
  ];

  tests.forEach(function(test) {
    it('correctly adds ' + test.args.length + ' args', function() {
      var res = add.apply(null, test.args);
      assert.equal(res, test.expected);
    });
  });
});
*/


    