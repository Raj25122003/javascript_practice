let src ={
    age :12,
    wt :68,
    ht : 180,
};

//assign method
// let dest = Object.assign({},src);

//cloning using iteration
let dest = {};
for(let Key in src){
    let newKey = Key;
    let newValue = src[Key];
    //insert new key and value in dest and create a clone....
    dest[newKey] = newValue;
}
src.age = 90;
console.log("src :",src);
console.log("dest : ",dest);


//spread operator
// let dest = {...src};
// src.age =90;
// console.log("src :",src);
// console.log("dest : ",dest);


