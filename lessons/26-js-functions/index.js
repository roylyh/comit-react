// Define a function that will show even numbers from 0 to 100 as output

function showevennumber() {
    for (let i=0;i<=100;i++)
        console.log(i);
}

showevennumber();

// Define a function named showUser that will output the following datas

function showUser(name,age,pnum,street,pcode,married) {
    console.log("My name:",name);
    console.log("My age:",age);
    console.log("My phone number:",pnum);
    console.log("My street name:",street);
    console.log("My postal code:",pcode);
    console.log("Married status:",Boolean(married));
}

showUser("Roy","33","717-0909","Kenderdine Rd","S7NXXX","Yes");

// Define a evenNumbers variable and assign a function as value

let evenNumbers=function() {
    for (let i=0;i<=100;i++)
        console.log(i);
}

for (let j=0;j<5;j++) {
    evenNumbers();
}



// Define a fibonacci variable and assign a function value

let fibonacci = function (maxnum) {
    if (maxnum <= 0) {
        console.log("error,please input the number which is greater than 0");
        return;
    } else if (maxnum==1) {
        console.log(0);
    } else if (maxnum==2) {
        console.log(0);
        console.log(1);
    } else {
        let a = 0,b = 1;
        let c;
        console.log(0);
        console.log(1);
        for (let i=3;i<=maxnum;i++) {
            c = a + b;
            a = b;
            b = c;
            console.log(c);
        }
    }   
}
let maxnum = prompt("please input the maximun number",1);
fibonacci(maxnum);

// Define a showName variable and assign a function as value
let showName = function (yourname) {
    let l = yourname.length;
    let str = "";
    str+=showEqualsmark(l);
    str=str+"=  "+yourname+"  ="+"\n";
    str+=showEqualsmark(l);
    console.log(str);
}
let showEqualsmark = function (length) {
    let str2="";
    for (let i=0;i<length+6;i++) {
        str2 += "=";
    }
    str2 += "\n";
    return str2;
}
let yourname=prompt("input your name","Roy");
showName(yourname);