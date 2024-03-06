function solution(myString) {
    if (myString.indexOf('l') == -1 && myString.indexOf('r') == -1) {
        return [];
    } else {
        let a = myString.indexOf('l');
        let b = myString.indexOf('r');
        console.log('a:' + a);
        console.log('b:' + b);
        if (a == -1) {
            let answer = myString.slice(b + 1);
            console.log(answer);
            return answer;
        } else if (b == -1) {
            let answer = myString.slice(0, a);
            console.log(answer);
            return answer;
        } else if (a < b) {
            let answer = myString.slice(0, a);
            console.log(answer);
            return answer;
        } else {
            console.log('ㅡ');
            let answer = myString.slice(b + 1);
            console.log(answer);
            return answer;
        }
    }
}
console.log(solution(["r", "u", "u", "u"]));