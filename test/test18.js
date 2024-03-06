function test(input) {
    let cnt = 0;
    while (true) {
        if (input == 1) {
            return cnt;
        }
        if (input % 2 == 0) {
            input = input / 2;
            cnt++;
        } else {
            input = (input - 1) / 2;
            cnt++;
        }
    }
    return output;
}
function solution(num_list) {
    var answer = 0;
    for (let i = 0; i < num_list.length; i++) {
        answer += test(num_list[i]);
    }
    return answer;
}