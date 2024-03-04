let sumOfEvenIndices = num_list.reduce((accumulator, currentValue, currentIndex) => {
    // Check if the index is even
    if (currentIndex % 2 === 0) {
        return accumulator + currentValue;
    } else {
        return accumulator;
    }
}, 0);

let sumOfOddIndices = num_list.reduce((accumulator, currentValue, currentIndex) => {
    // Check if the index is even
    if (currentIndex % 2 === 0) {
        return accumulator + currentValue;
    } else {
        return accumulator;
    }
}, 0);

if ( sumOfEvenIndices > sumOfOddIndices){
    return sumOfEvenIndices;
}else{
    return sumOfOddIndices;
}