const expect = require('chai').expect;
const BubbleSort = require('../src/bubbleSort');
const sinon = require('sinon');

describe('Bubble Sort' , () => {
    it('exists', () => {
        expect(BubbleSort.sort).to.be.ok;
    });

    it('Handles an empty array', () => {
        expect(BubbleSort.sort([])).to.eql([]);
    });

    it('sorts array in ascending order', () => {
        expect(BubbleSort.sort([2,60,49,-1,0], (first, second) => { return first > second;})).to.eql([-1,0,2,49,60]);
    });

    it('sorts array in descending order', () => {
        expect(BubbleSort.sort([2,60,49,-1,0], (first, second) => { return first < second;})).to.eql([60,49,2,0,-1]);
    });

    it('sorting an already sorted array does comparisons (n-1) times', () => {
        let count = 0;
        expect(BubbleSort.sort([-1,0,2,49,60], (first, second) => { 
            count++;
            return first > second;
        })).to.eql([-1,0,2,49,60]);
        expect(count).to.equal(4);
    });

    it('sorting an already sorted array does swaps 0 times (using spy)', () => {
        const spy = sinon.spy(BubbleSort, "swap");
        BubbleSort.sort([-1,0,2,49,60], (first, second) => { return first > second; });
        expect(spy.callCount).to.equal(0);
    });
});