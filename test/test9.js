function solution(arr, idx) {
    let temp = arr.slice(idx, arr.length).indexOf(1);
    if (temp >= 0) {
        return temp + idx;
    } else {
        return -1;
    }
}