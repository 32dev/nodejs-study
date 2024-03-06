function test(arr, s, e, k) {

    let result = arr.slice(s, e + 1).filter(el => el > k);
    if (result.length == 0) {
        return -1;
    } else {
        result = Math.min(...result);
        console.log(result);
        return result;
    }
}
function solution(arr, queries) {
    var answer = [];
    for (let i = 0; i < queries.length; i++) {
        answer.push(test(arr, queries[i][0], queries[i][1], queries[i][2]));
    }
    return answer;
}