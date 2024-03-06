function solution(arr) {
    let stk = [];
    let i = 0;
    while (i < arr.length) {
        if (stk.length == 0) {
            stk.push(arr[i]);
            i = i + 1;
        } else if (stk[stk.length - 1] == arr[i]) {
            stk.splice(stk.length - 1, 1);
            i++;
        } else if (stk[stk.length - 1] != arr[i]) {
            stk.push(arr[i]);
            i++;
        }
    }
    if (stk.length == 0) {
        return [-1];
    }
    return stk;
}
solution([0, 1, 1, 0]);