// Steamroller
// Flatten a nested array. You must account for varying levels of nesting.

function steamrollArray(arr) {
    const flattenedArray = [];
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        flattenedArray.push(...steamrollArray(arr[i]));
      } else {
        flattenedArray.push(arr[i]);
      }
    }
    return flattenedArray;
  }
  
  steamrollArray([1, [2], [3, [[4]]]]);



  // OR this <3

//   function steamrollArray(arr) {
//     const flat = [].concat(...arr);
//     return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
//   }
  
//   steamrollArray([1, [2], [3, [[4]]]]);