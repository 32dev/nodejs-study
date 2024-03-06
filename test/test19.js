function test(pattern, element) {
    let result = 0;
    let temp = 0;
    for (let i = 0; i < pattern.length; i++) {
        if (pattern[i] >= element) {
            temp = pattern[i];
            break;
        }
    }
    console.log(temp - element);
    return temp - element;
}

function solution(arr) {
    var answer = [];
    let temp = 0;
    let pattern = [];
    for (let i = 0; i <= 10; i++) {
        pattern.push(Math.pow(2, i));
    }
    temp = test(pattern, arr.length);
    for (let i = 0; i < temp; i++) {
        answer.push(0);
    }
    return arr.concat(answer);
}