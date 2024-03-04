function test(arr){
    let answer = [];
    for ( let i =0; i<arr.length;i++){
        answer.push(arr[i].length);
    }
    return answer;
}

function solution(myString) {
   return test(myString.split('x'));
}