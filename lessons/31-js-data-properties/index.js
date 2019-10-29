// 3 movies
// let movies=prompt("input your three favourite movies, separated by a comma");
// console.log(movies.split(", "));

// reverse a sentence
let rsentence=prompt("enter a sentence that you would like reversed");
function reverseString(rsentence) {
    return rsentence.split("").reverse().join("");
}
alert(reverseString(rsentence));

