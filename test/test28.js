function solution(myString, pat) {
    var answer = 0;
    let array = [];
    let map = new Map();
    for (let i = 0; i < myString.length; i++) {
        console.log(myString.substr(i, pat.length));
        let temp = myString.substr(i, pat.length);
        if (temp.indexOf(pat) >= 0) {
            answer++;
        }
    }
    return answer;
}