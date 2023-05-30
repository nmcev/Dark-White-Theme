let great = document.querySelector('.great');
let body = document.querySelector('.body');
let btn = document.querySelector('.btn');

btn.addEventListener('click', function () {
    if (great.textContent === "White Mood") {
        great.textContent = "Dark Mood";
        great.style.color = 'white';
        body.style.backgroundColor = '#262626';
        btn.textContent = "Switch to White mood";
        btn.classList.add("btn-white");
        btn.classList.remove("btn-dark");

    } else {
        great.textContent = "White Mood";
        great.style.color = '';
        body.style.backgroundColor = '';
        btn.textContent = "Switch to Dark mood";
        btn.classList.remove("btn-white");
        btn.classList.add("btn-dark");
    }
});