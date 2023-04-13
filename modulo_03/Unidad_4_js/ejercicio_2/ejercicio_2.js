// Programar un contador de caracteres para un textarea.

const button = document.getElementById("counter_amount");
const result = document.getElementById("counter");
const write = document.getElementById("write");

button.addEventListener('click',function() {
	result.innerHTML = write.value.length;	
});