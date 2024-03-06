function test(strings) {
    // Find the maximum length
    let maxLength = Math.max(...strings.map(str => str.length));

    // Filter the array based on the maximum length
    let filteredStrings = strings.filter(str => str.length === maxLength);

    console.log("Array of strings:", strings);
    console.log("Maximum length:", maxLength);
    console.log("Filtered strings:", filteredStrings);
}
test(['AbCdE', 'AbCdEF', 'AbCdEFG']);


