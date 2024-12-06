let x = Math.floor(Math.random() * 11) + 1;
let y = Math.floor(Math.random() * 11) + 1;
let z = x + y;

let r = document.querySelector('.dealer-p');
r.innerHTML = z;

let a = Math.floor(Math.random() * 11) + 1;
let b = Math.floor(Math.random() * 11) + 1;
let c = a + b;

let s = document.querySelector('.user-p');
s.innerHTML = c;

let arr = [];
for (let i = 0; i < 51; i++) {
    arr.push(Math.floor(Math.random() * 11) + 1);
}

let res = document.querySelector('.result');

document.querySelector('#hit').addEventListener('click', function () {
    if (c <= 21) {
        c += arr.shift();
        s.innerHTML = c;

        if (c > 21) {
            res.innerHTML = "You Lose";
        }
    }
});

document.querySelector('#pass').addEventListener('click', function () {
    while (z <= 18) {
        z += arr.shift();
    }
    r.innerHTML = z;

    if (c == 21 || z > 21 || (c <= 21 && c > z)) {
        res.innerHTML = "You Win";
    } else if (c > 21 || (c <= 21 && c < z)) {
        res.innerHTML = "You Lose";
    } else if (c == z) {
        res.innerHTML = "Draw";
    }
});
