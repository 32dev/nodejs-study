
function test(my_strings,parts){
    let answer = '';
    for ( let i=0; i<my_strings.length;i++){
        console.log(parts[i][0],parts[i][1]);
        answer += my_strings[i].substr(parts[i][0],parts[i][1]-parts[i][0]+1);
    }
    console.log(answer);
}
test(["progressive", "hamburger", "hammer", "ahocorasick"], [[0, 4], [1, 2], [3, 5], [7, 7]]);
