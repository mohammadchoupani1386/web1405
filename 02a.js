
let command = process.argv[2]
let num1 = Number(process.argv[3])
let num2 = Number(process.argv[4])
function sum(num1, num2) {
    return num1+num2

}
function minus(num1,num2) {
    return num1-num2

}
function showProfile(name, age, email) {
    console.log("-------------------");
    console.log("Name  :", name);
    console.log("Age   :", age);
    console.log("Email :", email);
    console.log("-------------------");
}
function multiply(num1, num2){
    return num1 * num2
}
if (command === 'sum') {
    console.log("Sum Is : ",sum(num1,num2));
     

}
else if (command === 'profile') {
    let name = process.argv[3];
    let age = process.argv[4];
    let email = process.argv[5];
    
    showProfile(name, age, email);
}
else if (command === 'minus') {
    console.log("minus : ",minus(num1,num2));

}
else if (command === 'multiply'){
    console.log("multiply is :",multiply(num1,num2))
}
else{
    console.log('incorrect operation')
}