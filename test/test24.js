function solution(intStrs, k, s, l) {
    let answer = [];
    for (let i = 0; i < intStrs.length; i++) {
        let temp = intStrs[i].split('');
        let array = temp.slice(s, s + l);
        let string = array.join('');
        let num = parseInt(string);
        if (num > k) {
            answer.push(num);
        }

    }
    console.log(answer);
    return answer;
}

solution(["0123456789", "9876543210", "9999999999999"], 50000, 5, 5);
