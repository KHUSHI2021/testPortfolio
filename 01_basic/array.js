const arr=[1,4,5,6,77,8]
const arr1=[2,7,0,6,5,2]

console.log(arr);

const myn1=arr.slice(1,3)
console.log(myn1);
console.log(arr);
const myn2=arr.splice(1,3)
console.log(myn2);
console.log(arr);

const all_number=[...arr , ...arr1]
console.log(all_number)

