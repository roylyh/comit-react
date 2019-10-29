// 3 movies
let movies=prompt("input your three favourite movies, separated by a comma");
console.log(movies.split(", "));

// reverse a sentence
let rsentence=prompt("enter a sentence that you would like reversed");
function reverseString(sen) {
    return sen.split("").reverse().join("");
}
alert(reverseString(rsentence));

