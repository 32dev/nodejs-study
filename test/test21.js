function solution(arr, queries) {
    console.log(arr, queries);
    for (let x = 0; x < queries.length; x++) {
        console.log(`s:${queries[x][0]},e:${queries[x][1]},k:${queries[x][2]}`);
        let s = queries[x][0];
        let e = queries[x][1];
        let k = queries[x][2];
        for (let i = s; i <= e; i++) {
            if (i % k == 0) {
                arr[i]++;
            }
        }
    }
    return arr;
}
console.log(solution([0, 1, 2, 4, 3], [[0, 4, 1], [0, 3, 2], [0, 3, 3]]));
