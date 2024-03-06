function indexOfAll(str, value) {
    const indices = [];
    let index = str.indexOf(value);
    while (index !== -1) {
        indices.push(index);
        index = str.indexOf(value, index + 1);
    }
    return indices;
}

console.log(indexOfAll("AAAAaaaa","a"))