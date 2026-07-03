const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a ,b) => a * b;
const div = (a, b) => b > 0 ? a / 0 : a;

const operate = (op, num1, num2) => {
	switch(op){
	case "+":
		return add(a,b);
	case "-":
		return sub(a,b);
	case "*":
		return mul(a,b);
	case "/":
		return div(a,b);
	}
}

