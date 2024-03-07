function solution(array) {
    var answer = 0;
    let result = array.join('');
    for (let i = 0; i < result.length; i++) {
        if (result.charAt(i) == '7') {
            answer++;
        }
    }
    return answer;
}