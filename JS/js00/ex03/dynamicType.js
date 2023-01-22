
const dynamicType = {
	value: null,
	put: function (num) {
		if (num === null)
			this.value = num;
		else
			console.log("The put function should only be used once before the printType");
	},
	change: function () {
		if (this.value === "string")
			
	},
	printType: function () {
		console.log(`The value is of type ${typeof this.value}`);
	}
}
