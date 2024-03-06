function groupByLengthAndCount(arr) {
    return arr.reduce((lengthCounts, currentString) => {
        const length = currentString.length;

        // Check if the length is already a key in the object
        if (!lengthCounts[length]) {
            // If not, initialize it with an empty array
            lengthCounts[length] = [];
        }

        // Add the current string to the array corresponding to its length
        lengthCounts[length].push(currentString);

        return lengthCounts;
    }, {});
}

function solution(strArr) {
    let groupedByLength = groupByLengthAndCount(strArr);

    // Find the maximum count and corresponding length
    let maxLength = 0;
    let maxCount = 0;

    for (const length in groupedByLength) {
        const count = groupedByLength[length].length;

        if (count > maxCount) {
            maxCount = count;
            maxLength = length;
        }
    }
    return maxCount;
}
