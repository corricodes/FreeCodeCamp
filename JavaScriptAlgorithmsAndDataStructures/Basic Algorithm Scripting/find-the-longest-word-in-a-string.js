// Find the Longest Word in a String
// Return the length of the longest word in the provided sentence.

// Your response should be a number.

// using reduce

function findLongestWordLength(str) {
    return str
    .split(' ')
    .reduce((longest, word) => Math.max(longest, word.length), 0);
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");

// using map

function findLongestWordLength(str) {
    return Math.max(...str.split(" ").map(word => word.length));
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");