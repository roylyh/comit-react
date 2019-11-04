
const arr=[1, 2, 3, 4, 5];
// let squares = arr.map((num)=>num*num);
let squares = arr.map(function(num){return Math.pow(num,2);});
console.log(arr);
console.log(squares);

const arr2=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let even=arr2.filter((num)=>num%2==0);
let odd=arr2.filter((num)=>num%2==1);
console.log(even);
console.log(odd);
console.log(arr2);

// name age city

const arr3=[
    {name:"Roy1",age:11,city:"Saskatoon"},
    {name:"Roy2",age:21,city:"Regina"},
    {name:"Roy3",age:31,city:"Edmonton"},
    {name:"Roy4",age:41,city:"Calgary"},
    {name:"Roy5",age:51,city:"Toroto"}
]

let arr4 = arr3.filter(
    arr => {
        return arr.age>20;
    }
)

let arr5 = arr3.filter(
    arr => {
        return arr.age<20 && arr.city=="Saskatoon";
    } 
)

let arrage=arr3.map(arr => arr.age);

console.log(arr4);
console.log(arr5);
console.log(arrage);

function stripVowels(str){
    let arr6 = str.split("");
    let arr7 = arr6.filter(
        (cha) => cha != "a" && cha != "e" && cha != "i" && cha != "o" && cha !="u" && cha !="A"
        && cha != "E" && cha != "I" && cha != "O" && cha != "U"
    )
    return arr7.join("");
}

function randomWord(randomFlag, min, max) {
    var str = "",
        range = min,
        arr = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
 
    if(randomFlag){
        range = Math.round(Math.random() * (max-min)) + min;
    }
    for(var i=0; i<range; i++){
        pos = Math.round(Math.random() * (arr.length-1));
        str += arr[pos];
    }
    return str;
}

let string1=randomWord(1,10,15);
let string2=randomWord(1,10,15);
let string3=randomWord(1,10,15);

console.log(stripVowels(string1));
console.log(stripVowels(string2));
console.log(stripVowels(string3));