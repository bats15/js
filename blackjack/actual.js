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

let num = Math.floor(Math.random() * 11)+1;

let res = document.querySelector('.result');

document.querySelector('#hit').addEventListener('click', function () {
    if (c <= 21) {
        c += num;
        num = Math.floor(Math.random() * 11)+1;
        s.innerHTML = c;

        if (c > 21) {
            res.innerHTML = "You Lose";
        }
    }
});

document.querySelector('#pass').addEventListener('click', function () {
    while (z <= 18) {
        z += num;
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

document.addEventListener('keydown', function (event) {
    if (event.code === 'Space') {
        x = Math.floor(Math.random() * 11) + 1;
        y = Math.floor(Math.random() * 11) + 1;
        z = x + y;
        r.innerHTML = z;

        a = Math.floor(Math.random() * 11) + 1;
        b = Math.floor(Math.random() * 11) + 1;
        c = a + b;
        s.innerHTML = c;

        

        res.innerHTML = "";
    }
});
document.addEventListener('keydown', function (event) {
    if (event.code === 'ArrowLeft') {
        document.querySelector('#pass').click();
    } else if (event.code === 'ArrowRight') {
        document.querySelector('#hit').click();
    }
});