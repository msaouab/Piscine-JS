
export default function	helloSomeone(input) {
	if (input === undefined)
		console.log("Nobody can define me!");
	else if (isNaN(input))
		console.log("Age is just a number");
	else if (input === null)
		console.log("I am null and void");
	else if (typeof input === 'number' && input < 0)
		console.log("I am Benjamin Button!");
	else if (typeof input === 'number')
		console.log("My age is ", input);
	else if (input.length !== 0)
		console.log("Hello",input + "!");
	else if (input === "")
		console.log("Who are you?");
	// console.log(input.length);
}
