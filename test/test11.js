// "apporoograpemmemprs"
let list = [1, 16, 6, 15, 0, 10, 11, 3]
function test(str, idx) {
    let arr = str.split('');
    arr[idx] = '*';
    temp = arr.join('');
    return temp;
}
let temp = 'apporoograpemmemprs';
for (let i = 0; i < list.length; i++) {
    temp = test(temp, list[i])
}
console.log(temp.replaceAll("*", ""));