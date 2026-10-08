
let hello = process.argv[2]
let num1 = Number(process.argv[3])
let num2 = Number(process.argv[4])
function sum(num1, num2) {
    return num1+num2

}
function minus(num1,num2) {
    return num1-num2

}
if (hello === 'sum') {
    console.log("Sum Is : ",sum(num1,num2));
     

}
else if (hello === 'minus') {
    console.log("minus : ",minus(num1,num2));

}
else{
    console.log('incorrect operation')
}