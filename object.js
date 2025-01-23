// let obj ={
//     name: "Raj",
//     age:21,
//     weight: 65,
//     height: "5feet 9 inches",
//     greet:function(){
//         console.log("Hello i am here to help you...");
//     }

// }
// console.log(obj);
// obj.greet();
// console.log(typeof(obj));
// let obj2 = obj;
// //creation of Array

// let arr =[1,2,3,4,5];
// console.log(arr);
// //Array Constructor
// let brr = new Array("Raj",20,true);
// console.log(brr);
// console.log(typeof(arr));
// console.log(typeof(brr));
// //accessing the array
// console.log(brr[2]);
// console.log(brr[3]);
// //push and pop in array
// //push--->Insert at end in Array
// //pop()--->Remove at end from Array

// brr.push('Vardhan');
// console.log(brr);
// //pop
// brr.pop();
// console.log(brr);
// //Shift and Unshift in Array
// //shift--->Remove the first/leftmost Element
// //unshift--->add 1 element at the leftmost side
// brr.shift();
// console.log(brr);
// //unshift()
// brr.unshift("Singh");
// console.log(brr);
// //slice method in Array
// brr.push(20);
// brr.push(40);
// brr.push(70);
// brr.slice(2,4);
// console.log(brr.slice(2,4));//item at index2 will be considered
// //item at index 3 will be considered
// //item at index 4 will be excluded not considered
// console.log(brr);
// //splice ---> can change the content of the Array
// //1.insert into an array
// //2.Replace into an Array
// //3.Remove from an Array
// //brr.splice(1,2,'Bhumihar');
// brr.splice(1,0,'Anupam');
// console.log(brr);

// let arr=[10,20,30];
// let ansArray = arr.map((number)=>{
//     return number*number;
// })
// console.log(ansArray);
//adding via map
// let arr =[10,20,30];
// arr.map((number)=>{
//     console.log(number+1);
    
// })
//filter--->you want to filter out something from an array
//just like even numbers,odd numbers,strings ...
// let arr=[10,20,21,22,29,31,33]
// let evenArray= arr.filter((number)=>{
//     if(number%2==0){
//         return true;
//     }
//     else{
//         return false;
//     }
// });
// console.log(evenArray);
//second way 
// let arr=[10,20,30,31,33,37,41];
// let evenArray = arr.filter((number)=>{
//     return number%2==0;
// });
// console.log(evenArray);
//given an array and we have to filter string out of it
// let arr=[1,2,'love','raj',null];
// let ans = arr.filter((value)=>{
//     if(typeof(value)=="string"){
//         return true;
//     }
//     else{
//         return false;
//     }
// })
// console.log(ans);

// let arr=[10,20,30,40];
// let ans =arr.reduce((acc,curr)=>{
//     return acc+curr;
// },0);
// console.log(ans);

//sort --->converting into ascending order...
// let arr = [9,1,7,4,2,8];
// arr.sort();
// console.log(arr);//ascending order
// //h/w how to do in descending order
// console.log(arr.indexOf(9));//indexof
// //find method...>

//foreach loop
// let arr=[10,20,30];
// arr.forEach((value,index)=>{
//     console.log("Number",value,"index",index);
    
// })
//traditional method for printing the index of an array

// let arr=[10,20,30];
// let length = arr.length;
// console.log("length",length);

// for (let index = 0; index < length; index++) {
//     console.log((arr[index]));
    
// }

//for-in loop---->Iterate on enumerable properties
// let obj={
//     name:"love",
//     age:25,
//     weight:85,
//     height:"5feet 11inches",
//     greet:function(){
//         console.log("hello how are you all");
        
//     }

// };
// for(let key in obj){
//     console.log(key," ",obj[key]);
    
// }

//for of loop ---iterate over iteratable objects
//like Array , Strings...

// let arr=[10,20,30,40];
// for(let value of arr){
//     console.log(value);
    
// }
// let fullName = "Harsh";
// for(let value of fullName){
//     console.log(value);
    
// }

//Arrays with Number











