function solution(arr, k) {
    let mySet = new Set(arr);
    console.log(mySet);
    let temp = [];
    for (let i = 0; i < k; i++) {
        temp.push(-1);
    }
    let idx = 0;
    mySet.forEach((element) => {
        if (idx >= k) {
            return;
        }
        temp[idx] = element;
        idx++;
    });
    console.log(temp);
    return temp;

}