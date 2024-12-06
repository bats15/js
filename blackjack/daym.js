const prompt = require("prompt-sync")();
let x = Math.floor(Math.random() * 11)+1;
let y = Math.floor(Math.random() * 11)+1;
let z = x+y
console.log("Dealer: ", z)
let a = Math.floor(Math.random() * 11)+1
let b = Math.floor(Math.random() * 11)+1
let c = a+b
console.log("initial: ", c)
let arr = []
for (let i = 0; i < 51; i++) {
    arr.push(Math.floor(Math.random() * 11)+1)
}
let f = 0;
while(f==0){
    d = prompt("Hit? ")
    if(d == "y" && c<=21){
        c = c + arr[0]
        console.log(c)
        arr[0] = Math.floor(Math.random() * 11)+1
    }
    else{
        console.log("your number: ", c);
        for(let i=0; z<=18 && i<5; i++){
            z = z+arr[i];
        }
        console.log("Final from dealer: ", z)
        break
    }
}
if(c == 21 || z>21 || ((c<21 && z<21)&&c>z)){
    console.log("you win")
}
else if(c > 21 || ((c<21 && z<21)&&c<z)){
    console.log("You lose")
}
else if((c>21 && z>21)||c==z){
    console.log("draw")
}
// console.log(arr)