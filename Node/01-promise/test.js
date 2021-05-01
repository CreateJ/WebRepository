let a = {n:1}
let b = a;
a.c = a.x = a = {n:2}
console.log(a)
console.log(b)
