var a : [number,string,boolean] = [1,'a',true];

console.log(a[0]);
console.log(a[1]);
console.log(a[2]);

// using it in functions 

function myTuple(tople:[number,string]){
    console.log(tople);
}

myTuple([1,"p"]);