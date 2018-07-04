const expect = require('chai').expect;
const bubbleSort = require('../src/bubbleSort');

describe('Bubble Sort' , () => {
    it('Handles an empty array', () => {
        expect(bubbleSort([])).to.eql([]);
    });

    it('sorts array in ascending order', () => {
        expect(bubbleSort([2,60,49,-1,0], (first, second) => { return first > second;})).to.eql([-1,0,2,49,60]);
    });

    it('sorts array in descending order', () => {
        expect(bubbleSort([2,60,49,-1,0], (first, second) => { return first < second;})).to.eql([60,49,2,0,-1]);
    });

});