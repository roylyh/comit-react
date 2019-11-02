let user = new Object();
console.log(user);
console.log(typeof(user));
user.username="batman";
user.password="hunter2";
console.log(user);

let usern=prompt("input your username");
let passw=prompt("input your password");
if (user.username==usern && user.password==passw) {
    alert("Access Granted");
} else {
    alert("Access Denied");
}

let user2 = {
    username:"wonderwoman",
    password:"123123",
    greet(){
        return "Hello, I am "+this.username+".";
    },
    update(usr){
        this.username=usr;
    }
}
console.log(user2.greet());
user2.update("superman");
console.log(user2.greet());