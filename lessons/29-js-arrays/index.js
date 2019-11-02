let arr1 = new Array();
let arr2 = new Array();
arr1 = ["Roy1","Roy2","Roy3"];
arr2 = ["DadName","MomName"];
console.log(arr1.concat(arr2));
arr2.push("pet1name");
arr2.push("pet2name");
arr1.reverse();
console.log(arr2);
console.log(arr1);
console.log(arr2[0]);

for (let i=0; i < arr1.length; i++) {
    console.log(arr1[i]);
}

for (let j of arr2) {
    console.log(j);
}

function map(arr, func) {
    // todo, turn arr into new array using func
    for (let i=0; i<arr.length; i++) {
        arr[i]=func(arr[i]);

    }
    return arr;
  }
  
  const result = map([1, 2, 3], function(item) {
    return item * 2;
  });
  
  console.log(result); // [2, 4, 6]