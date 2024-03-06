
function test(str, idx) {
    let arr = str.split('');
    arr[idx] = '*';
    temp = arr.join('');
    return temp;
}

function solution(my_string, indices) {
    for (let i = 0; i < indices.length; i++) {
        my_string = test(my_string, indices[i])
    }
    console.log(my_string.replaceAll("*", ""));
    return temp.replaceAll("*", "");
}