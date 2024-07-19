
// Array Join
console.log("Array Join");
let jin=[1,2,3,4,5,6]
console.log(jin);
console.log(jin.join("+"));


//Array Spreading
console.log("Array Spreading")
let spread1=[1,2,3,4,5];
let spread2=[6,7,8,9,3];
let result=[...spread1,...spread2]
console.log(result);


// Array Destructing
console.log("Array Destructing");
let dest = [1, 2, 3, 4, 5];
console.log(dest);
let [a, b, c, d, e]=dest;
console.log(dest);


//Array Flattering
console.log("Array Flattering")
let flat=[[1,2],[3,4],[5,6],[7,8]];
let flatarr=flat.flat();
console.log(flatarr);



// Array Deduplication

console.log(" Array Deduplication");
let dup = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
console.log("Original Array:", dup);
let uniqueArray = [...new Set(dup)];
console.log("Unique Array:", uniqueArray);



// Array objects sorting

console.log("Array objects sorting")
let obj = [4, 2, 9, 1, 5];
console.log(obj);
obj.sort((a, b) => a - b);
console.log("Sorted Array in ascending order:", obj);

// Merging of Arrays

console.log("Merging of Arrays");
let mer1 = [1, 3, 5, 7];
let mer2 = [2, 4, 6, 8];
console.log("Array 1:", mer1);
console.log("Array 2:", mer2);
let mergedArray = [...mer1,...mer2];
console.log("Merged Array:", mergedArray.sort());



// Find the index of first ocuurance
let ind=[1,2,5,3,6];
let element = 5;
console.log("Element:", element);
let index = ind.indexOf(element);
if (index !== -1) {
    console.log("Index of first occurrence:", index);
} else {
    console.log("Element not found in array");
}

