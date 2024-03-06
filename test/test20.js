function check(num) {
    let temp = num.toString().split('');
    //console.log(temp);
    for (let i = 0; i < temp.length; i++) {
        let num = temp[i];
        if (num != '0' && num != '5') {
            // console.log(temp);
            return false;
        }
    }
    return true;
}
function solution(l, r) {
    let answer = [];
    for (let i = l; i <= r; i++) {
        if (check(i)) {
            answer.push(i);
        }
    }
    if (answer.length == 0) {
        return [-1];
    }
    return answer;
}