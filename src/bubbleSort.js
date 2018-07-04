function bubbleSort(array, comparisonFnForSwap) {
    if(!array.length) return array;
    let wasSorted = true;

    for(let i = 0; i < array.length-1; i++) {
        for(let j = 0; j < array.length-i-1; j++) {
            if(comparisonFnForSwap(array[j],array[j+1])) {
                const temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
                wasSorted = false;
            }
        }
        if(wasSorted) break;
    }
    return array;
}

module.exports = bubbleSort;