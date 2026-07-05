const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a ,b) => a * b;
const div = (a, b) => b > 0 ? a / b : 0;
const buttons = document.querySelectorAll(".button");
const equalButton = document.querySelector('#equal')
const clearButton = document.getElementById("clear")
const resultBoard = document.getElementById("screen")

let isResultDisplayed = false;

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

const parseString = (str, re) => {
	while(str.match(re)){
		const inputs = str.split(re);
		//after spliting with regexp first and last element are "", idk why
		const num1 = parseInt(inputs[1]);
		const operator = inputs[2];
		const num2 = parseInt(inputs[3]);
		if (operator === "/" && num2 === 0){
			alert("Error: Division by zero");
			return 0
		}

		let result = operate(operator,  num1, num2)
		if (!Number.isInteger(result)){
			result = result.toFixed(1);
		}
		str = str.replace(re, result.toString())
	}
	return str
}

//Summurize input by proceeding in priority
const processInput = () => {
	if (resultBoard.textContent !== "undefined"){
		let str = resultBoard.textContent
		//match multiplication and division
		const re1 = /(\d+)([/*])(\d+)/
		//match addition and substraction then
		const re2 = /(\d+)([+-])(\d+)/
		str = parseString(str, re1)
		str = parseString(str, re2)
		displayOutput(str)
		isResultDisplayed = true;
	}
}

const backSpace = () => {
	const str = resultBoard.textContent
	const len = str.length;
	resultBoard.textContent = str.slice(0, len-1)
	console.log(resultBoard.textContent)
}

const displayInput = (event) => {
	if (isResultDisplayed){
		clearBoard()
		isResultDisplayed = false;
	}
	resultBoard.textContent += event.target.textContent;
}

const displayOutput = (result) =>{
	resultBoard.textContent = result;
}

buttons.forEach((button) => {
	button.addEventListener('click', displayInput)
})

const processKeyboard = (event) => {
	if (isResultDisplayed){
		clearBoard()
		isResultDisplayed = false;
	}
	 const keyCode = event.key;
	 switch(keyCode){
	 case "1":
	 case "2":
	 case "3":
	 case "4":
	 case "5":
	 case "6":
	 case "7":
	 case "8":
	 case "9":
	 case "0":
	 case "+":
	 case "-":
	 case "*":
	 case "/":
	 	resultBoard.textContent += keyCode;
	 	break;
	 case "Enter":
	 	processInput();
	 	break;
	 case "Backspace":
	 	backSpace();
	 	break;
	 default:
	 	return;
	 }
}

document.addEventListener("keydown" , processKeyboard)
equalButton.addEventListener("click", processInput)
clearButton.addEventListener("click", clearBoard)
