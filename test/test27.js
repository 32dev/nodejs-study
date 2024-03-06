function solution(my_string, s, e) {
    console.log(my_string.slice(s, e))
    console.log(my_string.slice(s, e).split('').reverse().join(''));
    let a1 = my_string.slice(my_string, s);
    let a2 = my_string.slice(s, e + 1).split('').reverse().join('');
    let a3 = my_string.slice(e + 1, my_string.length);
    console.log(a1 + a2 + a3);
    return a1 + a2 + a3;
}