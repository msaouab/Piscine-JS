
let myFunc = num => Number(num);

const dynamicType = {
	constructor () {
		value: null;
	},
	put: function (num) {
		if (this.value == null)
			this.value = num;
		else
			console.log("The put function should only be used once before the printType");
	},
	change: function (type) {
		if (type === "String")
			this.value = this.value.toString();
		else if (type === "Number")
			this.value = Number(this.value);
		else if (type === "Object")
			this.value = JSON.parse(this.value);
		else if (type === "Array") {
			console.log(type);
			this.value = Array.from(String(this.value), myFunc);
		}
		else
			console.log("Invalid type provided for change function");
	},
	printType: function () {
		console.log(`The value is of type ${typeof this.value}, ${this.value}`);
	}
}

const type = dynamicType;

type.put("30");
type.change("Array");
type.printType();