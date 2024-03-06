function findLastIndexOf(arr, element) {
    return arr.lastIndexOf(element);
}
function solution(arr) {
    let start = arr.indexOf(2);
    let end = findLastIndexOf(arr, 2);
    let temp = arr.slice(start, end + 1);
    if (temp.length != 0) {
        return temp;
    } else {
        return [-1];
    }
}