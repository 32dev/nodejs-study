const arr = [
    { name: 'banana', price: 3000 },
    { name: 'apple', price: 1000 },
    { name: 'orange', price: 500 }
];
console.log(arr);
arr.sort(function (a, b) {
    return a.price - b.price;
});

console.log(arr);