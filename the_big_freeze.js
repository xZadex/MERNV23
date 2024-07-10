const arr = Object.freeze([1,2,3,4]);
arr.push(300); // we're no longer allowed to change `arr`

const array = [2,5,24,1,0,12,15];
const new_array = [...array].sort( (a) => a.item > 20 ? 1: -1);
console.log(new_array);