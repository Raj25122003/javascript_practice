//function definition
// function sayMyname(){
//     console.log("Love Babbar")
// }
// sayMyname()//use function-->function call

// function printcount(){
//     for(let i =1;i<=100;i++){
//         console.log(i)
//     }
// }
// printcount()

// function printnumber(num){
//     console.log("Print Number",num);

// }
// printnumber(5);

// function getaverage(num1,num2){
//     let average =(num1+num2)/2;
//     console.log("Average", average);
// }
// getaverage(2,3);

//Return function

// function getSum(a,b,c){
//     let sum = a+b+c;
//     return sum;
// }
// let ans = getSum(1,2,3);
// console.log("Printing Sum",ans); 

// function getMyName(firstName,lastName){
//     let fullName =firstName +" "+ lastName;
//     return fullName;
// }
// let fullName = getMyName("Raj","Harsh");
// console.log("My full name is",fullName);

//store a function under a variable

// let getMultiplication = function(a,b){
//     return a*b;
// }
// let ans=getMultiplication(3,4);
// console.log(ans);

// let squareNumber = function(num){
//     let ans = num**2;
//     return ans;
// }
// let ans =squareNumber(5);
// console.log(ans);

//Arrow Function

let getExp =(x,y)=>{
    let ans = x**y;
    return ans;
}
console.log(getExp(2,4));
