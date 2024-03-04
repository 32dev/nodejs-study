function solution(arr) {
    var answer = arr.reduce((ac, current) =>
        ac+current);
    return answer;
}
console.log(solution(["a","b","c"]));