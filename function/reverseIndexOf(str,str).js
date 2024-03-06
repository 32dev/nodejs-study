function reverseIndexOf(mainString, subString) {
    for (let i = mainString.length - subString.length; i >= 0; i--) {
      if (mainString.substring(i, i + subString.length) === subString) {
        return i;
      }
    }
    return -1; // Substring not found
  }
  ​