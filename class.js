// class Human{
//     //properties
//     age = 23;
//     #wt = 80;//public class hai so it is accessible after the scope..if private not accessible in any scope....
//     ht = 150;
//  constructor(newAge,newHeight,newWeight){
//     this.age = newAge;
//     this.ht = newHeight;
//     this.#wt = newWeight;
//  }
//     //behaviour

//     walking(){
//         console.log("I am walking",this.#wt);
        
//     }
//     running(){
//         console.log("I am running");
        
//     }
//     get fetchWeight(){
//         return this.#wt
//     }
//     set modifyWeight(val){
//         this.#wt = val;

//     }
// }
// let obj = new Human(50,190,101);
// console.log(obj.fetchWeight);
// obj.walking();

//default parameters ---> Allow to use function with default values...

function sayName(myName = "Raj"){
    console.log("My name is :",myName);
    
}
sayName("Harsh");

//with two parameters

function sayName(fname , lname){
    console.log("My Name is :",fname," ",lname);
    
}
sayName("Raj","Rana");

//to uppercase

function sayName(fName = "Harsh Vardhan", lName =fName.toUpperCase()){
    console.log("My Name is:",fName," ",lName);
    
}
sayName("Raj");

//Default Parameter as an object

function solve(value = { age:15,wt:90,ht:190}){
    console.log("Hello jii",value);
    
}
solve();

//Function as Default Parameters

function getAge(){
    return 190;
}
function utility(name = "Raj",age=getAge()){
    console.log(name," ",age);
    
}
utility();
