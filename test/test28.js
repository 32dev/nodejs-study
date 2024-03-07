function solution(myString, pat) {
    var answer = 0;
    for (let i = 0; i < myString.length; i++) {
        console.log(myString.substr(i, pat.length));
        let temp = myString.substr(i, pat.length);
        if (temp.indexOf(pat) >= 0) {
            answer++;
        }
    }
    return answer;
}