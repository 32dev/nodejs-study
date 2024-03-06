function solution(arr, queries) {
    for (let i = 0; i < queries.length; i++) {
        let s = queries[i][0];
        let e = queries[i][1];
        for (let j = s; j <= e; j++) {
            arr[j] += 1;
        }
    }
    return arr;
}
/**
 * [0, 1, 2, 3, 4]	[[0, 1],[1, 2],[2, 3]]	[1, 3, 4, 4, 4]
 * 
 */

console.log(solution([0, 1, 2, 3, 4], [[0, 1], [1, 2], [2, 3]]));