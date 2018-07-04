const expect = require('chai').expect;
const bubbleSort = require('../src/bubbleSort');
const sinon = require('sinon');

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

    it('sorting an already sorted array calls code for one loop; i.e. (n-1) times', () => {
        let count = 0;
        expect(bubbleSort([-1,0,2,49,60], (first, second) => { 
            count++;
            return first > second;
        })).to.eql([-1,0,2,49,60]);
        expect(count).to.eql(4);
    });
});