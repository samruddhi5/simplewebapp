let a=prompt("enter first number")
let b=prompt("enter second number")
let c=prompt("enter third number")
// let a=4
// let b=3
// let c=2
// console.log(a)
// console.log(b)
// console.log(c)

function maxis(){
    if(a>b && a>c)
    return a;
    else if(b>a && b>c)
    return b;
    else
    return c;
12
}
let mxx=maxis()
console.log(mxx)
document.getElementById("mx").innerHTML=mxx;



