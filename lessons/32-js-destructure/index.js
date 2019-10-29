let fruits=prompt("enter your top 5 favourite fruits separated by a comma");
let [fruit1,fruit2,fruit3,...fruit4]=fruits.split(",");
alert(fruit1+fruit2+fruit3);
alert(fruit4);