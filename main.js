/* (1)
Crear una funcion que retorne la suma de dos números.
*/

let sum = (a, b) => a + b;

/* (2)
Crear una funcion que retorne la potencia de un número dado, esta función deberá recibir la potencia y el número a potenciar.
*/

let power = (base, exp) => Math.pow(base, exp);

/* (3)
Cree una función que tome números y devuelva la suma de sus cubos.
sumOfCubes(1, 5, 9) ➞ 855
// Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
*/

let sumOfCubes = function() {
	let sum = 0;
	for (let i = 0; i < arguments.length; i++) {
		sum = sum + Math.pow(arguments[i], 3);
	}
	return sum;
}

/* (4)
Escribe una función que tome la base y la altura de un triángulo y devuelva su área.
triArea(3, 2) ➞ 3
*/

let triArea = (base, height) => base * height / 2;

/* (5)
Crear una función llamada calculator que recibe 3 parametros, dos numeros y una operación matematica(+,-,/,x,%), y si la operacion no es correcta que envie un mensaje “El parámetro no es reconocido”.
calculator(2, "+", 2) ➞ 4
*/

let calculator = (n1, n2, op) => {
	switch (op){
		case "+":
			return n1 + n2;
		case "-":
		return n1 - n2;
		case "/":
			return n1 / n2;
		case "x":
			return n1 * n2;
		case "%":
			return n1 % n2;
		default:
			return "El parámetro no es reconocido.";
	}
};