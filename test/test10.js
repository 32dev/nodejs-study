
function maxLength(strings) {
    // Find the maximum length
    let maxLength = Math.max(...strings.map(str => str.length));

    // Filter the array based on the maximum length
    let filteredStrings = strings.filter(str => str.length === maxLength);

    console.log("Array of strings:", strings);
    console.log("Maximum length:", maxLength);
    console.log("Filtered strings:", filteredStrings);
    return filteredStrings;


}
function reverseString(str) {
    return str.split('').reverse().join('');
}

function test(arr, pattern) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        // console.log(reverseString(arr[i]) + "/" + reverseString(pattern));
        let r_string = reverseString(arr[i]);
        let r_pattern = reverseString(pattern);
        // console.log(r_string.indexOf(r_pattern));
        if (r_string.indexOf(r_pattern) == 0) {
            result.push(arr[i]);
        }
    }
    return result;
}
function solution(myString, pat) {
    let array = [];
    for (let i = 0; i <= myString.length; i++) {
        let temp = myString.substr(0, i);
        console.log(temp);
        if (temp != "") {
            array.push(temp);
        }
    }
    let temp = test(array, pat);
    let result = maxLength(temp)[0];
    return result;
}
solution("AbCdEFG", "dE");