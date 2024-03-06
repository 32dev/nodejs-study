function solution(arr, flag) {
    var answer = [];

    for (let i = 0; i < flag.length; i++) {
        if (flag[i]) {
            for (let j = 1; j <= arr[i] * 2; j++) {
                answer.push(arr[i]);
            }
        } else {
            answer.splice(answer.length - arr[i], arr[i]);
        }
    }
    return answer;
}