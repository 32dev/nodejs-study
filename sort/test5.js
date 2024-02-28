const arr = [2, 1, 3, 10];

arr.sort(function (a, b) {
    return b - a;
});
console.log(arr); // [10, 3, 2, 1]