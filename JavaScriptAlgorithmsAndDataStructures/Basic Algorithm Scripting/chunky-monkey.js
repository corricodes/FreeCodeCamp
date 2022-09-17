// Chunky Monkey
// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
    if (arr.length <= size) {
      return [arr];
    } else {
      return [arr.slice(0, size)].concat(
        chunkArrayInGroups(arr.slice(size), size)
      );
    }
  }

  chunkArrayInGroups(["a", "b", "c", "d"], 2);

//   Code Explanation
// Array smaller than size is returned nested.
// For any array larger than size, it is split in two. First segment is nested and concatenated with second segment which makes a recursive call.





function chunkArrayInGroups(arr, size) {
    const newArr = [];
    while (arr.length > 0) {
      newArr.push(arr.splice(0, size));
    }
    return newArr;
  }

//   Code Explanation
//   Firstly, we create a variable. newArr is an empty array which we will push to.
//   Our while loop loops until the length of the array in our test is not 0.
//   Inside our loop, we push to the newArr array using arr.splice(0, size).
//   For each iteration of while loop, it deletes size number of elements from the front of arr and push them as an array to newArr.
//   Finally, we return the value of newArr.