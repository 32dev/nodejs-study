const arr1 = [1, 2, 3, 4];
const arr2 = arr1.map(currValue => currValue + 1);
const arr3 = arr1.map(function add(currValue) {
    return currValue + 1;
})
console.log(arr1);
console.log(arr2);
console.log(arr3);