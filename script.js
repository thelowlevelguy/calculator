const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a ,b) => a * b;
const div = (a, b) => b > 0 ? a / 0 : a;

const buttons = document.querySelectorAll(".button");
const equalButton = document.querySelector('#equal')
const clearButton = document.getElementById("clear")
const resultBoard = document.getElementById("screen")

const operate = (op, num1, num2) => {
	switch(op){
	case "+":
		return add(num1, num2);
	case "-":
		return sub(num1, num2);
	case "*":
		return mul(num1, num2);
	case "/":
		return div(num1, num2);
	}
}

const clearBoard = () => {
	resultBoard.textContent = "";
}

const parseString = (str) => {
	const re = /(\d+)([+/*-])(\d+)/
	return str.split(re);
}

const displayInput = (event) => {
	resultBoard.textContent += event.target.textContent;
}

const displayOutput = (result) =>{
	resultBoard.textContent = result;
}

const processInput = () => {
	if (resultBoard.textContent !== undefined){
		const input = resultBoard.textContent;
		const inputs = parseString(input);
		const num1 = parseInt(inputs[1]);
		const operator = inputs[2];
		const num2 = parseInt(inputs[3]);
		const result = operate(operator,  num1, num2);
		displayOutput(result)
	}
}


buttons.forEach((button) => {
	button.addEventListener('click', displayInput)
})

equalButton.addEventListener("click", processInput)
clearButton.addEventListener("click", clearBoard)
