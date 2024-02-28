const arr = [2, 1, 3, 10];
arr.sort(function (a, b) {
    if (a > b) return 1;
    if (a === b) return 0;
    if (a < b) return -1;
});
console.log(arr);