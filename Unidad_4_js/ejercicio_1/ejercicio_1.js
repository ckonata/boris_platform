const button_pink = document.querySelector('#pink');
const button_yellow = document.querySelector('#yellow');
const button_green = document.querySelector('#green');
const body = document.querySelector('body');

button_pink.addEventListener('click',function() {
    body.style.backgroundColor = 'palevioletred';
});

button_yellow.addEventListener('click',function() {
    body.style.backgroundColor = 'yellow';
});

button_green.addEventListener('click',function() {
    body.style.backgroundColor = 'olivedrab';
});