// Wherefore art thou
// Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

// For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.

function whatIsInAName(collection, source) {
    const arr = [];
    for (let i = 0; i < collection.length; i++) {
      let match = true;
      for (let sourceProp in source) {
        if (collection[i][sourceProp] !== source[sourceProp]) {
          match = false;
          break;
        }
      }
      if (match) arr.push(collection[i]);
    }
    return arr;
  }
  
  whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });




  // OR this shorter solution :)

//   function whatIsInAName(collection, source) {
//     const sourceKeys = Object.keys(source);
  
//     return collection
//       .filter(obj => sourceKeys
//         .every(key => obj.hasOwnProperty(key) &&
//           obj[key] === source[key]));
//   }