/***********************************************************************
Write a function called `subsets` that will return all subsets of an array.

Examples:
subsets([]) // [[]]
subsets([1]) // [[], [1]]
subsets([1, 2]) // [[], [1], [2], [1, 2]]
subsets([1, 2, 3]) // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]

Hint: For subsets([1, 2, 3]), there are two kinds of subsets:
  1. Those that do not contain 3 (all of these are subsets of [1, 2]).
  2. For every subset that does not contain 3, there is also a corresponding
     subset that is the same, except it also does contain 3.
***********************************************************************/

// if og arr is empty, return newArr

// reference to last index
// establish first subset
// insert last index value into first subset

// 1 use .slice() to make a shallow copy of og array
// 2 recurse with shallow copy
// 3 use .concat in order to concat arrays

const subsets = (arr) => {
    // if (!arr.length) return [[]];

    // let last = arr[arr.length-1];
    // let subs = subsets(arr.slice(0,arr.length-1));

    // return subs.concat(subs.map(sub => {
    //   let newArr = sub.slice(0);
    //   newArr.push(last);

    //   return newArr;
    // }))

    let result = [];

    function generateSet(path, index){
      result.push(path);

      for(let i = index; i < arr.length; i++){
        generateSet([...path, arr[i]], i + 1);
        console.log(">",...path, arr[i])
      }
    }

    generateSet([], 0)

    return result;
}


//let a = subsets([]) // [[]]
//console.log(a)
//let b = subsets([1]) // [[], [1]]
//console.log(b)
let c = subsets([1, 2]) // [[], [1], [2], [1, 2]]
console.log(c)
//let d = subsets([1, 2, 3]) // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]
//console.log(d)

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = subsets;
} catch (e) {
  module.exports = null;
}
