function reverseString(str) {
    return str.split('').reverse().join('');
}
let str = 'hello, world!';
console.log(str);
console.log(reverseString(str));