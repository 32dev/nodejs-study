function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    return arr;
}
function solution(arr, queries) {
    for (let i = 0; i < queries.length; i++) {
        console.log(queries[i][0] + ',' + queries[i][1]);
        arr = swap(arr, queries[i][0], queries[i][1]);
    }
    return arr;
}