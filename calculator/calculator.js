const inputel = document.getElementById('showvalue');

function reset(re){
	inputel.value = "";

	// console.log(btn);	

};


function display(value){
	inputel.value += value;
}

function calculate(){
	inputel.value = eval(inputel.value);
}

function del(){
	// console.log(typeof inputel.value);
	let value = inputel.value;
	value = value.slice(0, value.length - 1);
	inputel.value = value;
}
