let hour=prompt("Pleas enter the current hour(out of 0-23)");

if (hour<0||hour>23) {
    alert("Your input is wrong");
} else if (hour<8||hour>=18) {
    alert("Hour is outside of office hours");
} else {
    alert("We ar open");
}