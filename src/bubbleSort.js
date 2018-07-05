class BubbleSort {

    static sort(array, comparisonFnForSwap) {
        if(!array.length) return array;
        let wasSorted = true;

        for(let i = 0; i < array.length-1; i++) {
            for(let j = 0; j < array.length-i-1; j++) {
                if(comparisonFnForSwap(array[j],array[j+1])) {
                    array = BubbleSort.swap(array, j);                
                    wasSorted = false;
                }
            }
            if(wasSorted) break;
        }
        return array;
    }

    static swap(array, index) {
        const temp = array[index];
        array[index] = array[index+1];
        array[index+1] = temp;
        return array;
    }
}

module.exports = BubbleSort;