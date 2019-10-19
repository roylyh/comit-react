let result=0;
outer: for (let i=0;i<=1000;i++) {
    result = result + i;
    // console.log("result ", result);
    if (result>400) {
        break outer;
    }
}

alert(`The result is ${result}`);

// show numbers from 0 to 10

 console.log("Numbers from 0 to 10 using for");
 for (i=0;i<=10;i++) {
      console.log(i);
 }

console.log("Numbers from 0 to 10 using do");
i=0;
do {
    console.log(i);
    i++;
} while (i<=10);

console.log("Numbers from 0 to 10 using while");
i=0;
while (i<=10) {
    console.log(i);
    i++;
}

// show numbers from 100 to 0

console.log("Numbers from 100 to 0 using for");
for (i=100;i>=0;i--) {
    console.log(i);
}

console.log("Numbers from 100 to 0 using do");
i=100;
do {
    console.log(i);
    i--;
} while (i>=0);

console.log("Numbers from 100 to 0 using while");
i=100;
while (i>=0) {
    console.log(i);
    i--;
}

// show even numbers from 0 to 100

console.log("Even numbers between 0 and 100 using for");
for (i=0;i<=100;i=i+2) {
    console.log(i);
}

console.log("Even numbers between 0 and 100 using do");
i=0;
do {
    console.log(i);
    i=i+2;
} while (i<=100);

console.log("Even numbers between 0 and 100 using while");
i=0;
while (i<=100) {
    console.log(i);
    i=i+2;
}

// produce star marks
let star="";
let j;
for (i=1;i<=13;i++) {
    for (j=0;j<i;j++){
        star+="*"
    }
    star+="\n"
}
console.log(star);