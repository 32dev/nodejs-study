const arr = ['banana', 'b', 'Boy'];

arr.sort(function (a, b) {
    const upperCaseA = a.toUpperCase();
    const upperCaseB = b.toUpperCase();

    if (upperCaseA > upperCaseB) return 1;
    if (upperCaseA < upperCaseB) return -1;
    if (upperCaseA === upperCaseB) return 0;
});

console.log(arr);