//Function Hosting

// sayMyname("Raj");

// function sayMyname(finalName){
//     console.log(finalName);
    
// }
// //variable hosting

// console.log(age);
// var age = 25;

//using let and const keyword
// console.log(age);
// let age = 25;
// sayHello();
// let sayHello = function(){
//     console.log("hello jee how are you all");//reference error if you will store a function in a variable
// }

//class hosting
// const object1=new Human();
// class Human{

// }//reference error means not possible class hosting in Javascript
// //we can just do var hosting and function hosting in javascript

//Assigning to a variable
// let greet = function(){
//     console.log("Greetins for the day")
// }
// greet();

//Pass as Argument to the function

// function greetMe(greet,fullName){
//     console.log("Hello",fullName);
//     greet();
    
// }
// function greet(){
//     console.log("Greeting for the Day");
    
// }
// greetMe(greet,"Raj");

//Return a Function

// function solve(number){
//     return function(number){
//         return number*number;
//     }
// }
// let ans = solve(5);
// let finalAns = ans(10);
// console.log(finalAns);


//storing a function in Data Structures 
// const arr =[
//     function(a,b){
//         return a+b;
//     },
//     function(a,b){
//         return a-b;
//     },
//     function(a,b){
//         return a*b;
//     }
// ];
// let first = arr[2];
// let ans = first(5,10);
// console.log(ans);

//initialize it under object

// let obj={
//     age:25,
//     wt:36,
//     ht:550,
//     greet:()=>{
//         console.log("Hello World");
        
//     }
// }
// console.log(obj.age);
// obj.greet();


