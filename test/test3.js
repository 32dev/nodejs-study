function solution(str_list, ex) {
    var answer = '';
    for ( let i=0; i<str_list.length;i++){
        if (str_list[i].indexOf(ex)>=0){
            continue;
        }else{
            answer += str_list[i];
        }
    }
    return answer;
}