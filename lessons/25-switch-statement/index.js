let weekdayNumber = prompt("input a numeric value between 1 and 7");
let dayname;

//using if/else statement
if (weekdayNumber==1) {
    dayname="Monday";
} else if (weekdayNumber==2) {
    dayname="Tuesday";
} else if (weekdayNumber==3) {
    dayname="Wednesday";
} else if (weekdayNumber==4) {
    dayname="Thursday";
} else if (weekdayNumber==5) {
    dayname="Friday";
} else if (weekdayNumber==6) {
    dayname="Saturday";
} else if (weekdayNumber==7) {
    dayname= "Sunday";
} else {
    console.log("Error: Number not between 1-7");
}

//using switch statement
// switch(Number(weekdayNumber)) {
//     case 1:
//         dayname="Monday"; 
//         break;
//     case 2:
//         dayname="Tuesday"; 
//         break;
//     case 3:
//         dayname="Wednesday";
//         break;
//     case 4:
//         dayname="Thursday";
//         break;
//     case 5:
//         dayname="Friday";
//         break;
//     case 6:
//         dayname="Saturday";
//         break;
//     case 7:
//         dayname="Sunday";
//         break;
//     default:
//         console.log("Error: Number not between 1-7");
// }

if (weekdayNumber>=1 && weekdayNumber<=7) {
    console.log(`Today is ${dayname}`)
}