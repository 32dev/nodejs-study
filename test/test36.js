
function reverseString(str) {
    //console.log(str);
    return str.split('').reverse().join('');
}

function replaceSubstringByIndices(inputString, startIndex, endIndex, replacement) {
    if (startIndex < 0 || endIndex >= inputString.length || startIndex > endIndex) {
        // Indices out of bounds or invalid, return the original string
        return inputString;
    }

    // Construct the new string with the replacement
    let replacedString =
        inputString.substring(0, startIndex) +
        replacement +
        inputString.substring(endIndex + 1);

    return replacedString;
}

function solution(my_string, queries) {
    let array = my_string.split('');
    for (let i = 0; i < queries.length; i++) {
        my_string = replaceSubstringByIndices(my_string, queries[i][0], queries[i][1], reverseString(my_string.slice(queries[i][0], queries[i][1] + 1)));
        //console.log(my_string);
    }
    return my_string;
}