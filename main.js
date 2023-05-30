let great = document.querySelector('.great');
let body = document.querySelector('.body');
let icon = document.querySelector('.icon');
let checkbox = document.querySelector('.checkbox');

checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
        great.textContent = "Dark Mood";
        great.style.color = 'white';
        body.classList.add('dark-mode');
    } else {
        great.textContent = "White Mood";
        great.style.color = '';
        body.classList.remove('dark-mode');
    }
});