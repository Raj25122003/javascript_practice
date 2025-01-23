let score = "33"//if we take 33abc here it will show as Number but when we print its value then it will show NaN->>Not a number
//null-->> value will be 0
//undefined---> Nan
//true-->>1
//false-->>0
//string--> NaN
console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)//Number should be in uppercase that is mandatory
console.log(typeof valueInNumber);

console.log(valueInNumber);//printing the value of number...

let isLoggedIn = "Raj"
let booleanIsLoggedin = Boolean(isLoggedIn)
console.log(booleanIsLoggedin);
console.log(typeof booleanIsLoggedin);

//1--> true 0->>false
//" ">> false
// "raj" --> true
let someNumber = 33
let stringNumber = String(someNumber)

console.log(stringNumber)
console.log(typeof stringNumber)

//**********************************Operations****************************************************** */

let value = 3
let negValue = -value
console.log(negValue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**2);
console.log(2/2);
console.log(2%2);
 let str1 = "hello"
 let str2 = " Raj"
 let str3 = str1+str2
 console.log(str3);

 console.log("1"+2);
 console.log(1+"2");
 console.log("1"+2+2);
 console.log(1+2+"2");
 console.log((3+4)/5*3);

 console.log(+true);
 console.log(+"");

 let num1,num2,num3
 num1 = num2 = num3 = 2+2
 //prefix and Postfix Increment
 let gamecounter = 100
 gamecounter++
 console.log(gamecounter);
 
 
 
 
 
 
 
 
 







