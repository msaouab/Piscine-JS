
const stackCreate = () => ({
	arr: []
});

function	stackEmpty (stack) {
	return (stack.arr.length === 0);
}

function	stackPush(stack, data) {
	stack.arr.push(data);
}

function	stackPeek(stack) {
	return (stack.arr[0]);
}

function	stackPop(stack) {
	if (stack.arr.length > 0)
		stack.arr.pop();
}

/*		test 	*/

const myStack = stackCreate();
console.log(stackEmpty(myStack));
stackPush(myStack, 1);
stackPop(myStack);
stackPush(myStack, 2);
stackPush(myStack, 3);
stackPush(myStack, 4);
stackPush(myStack, 5);

for (let i = 0; i < myStack.arr.length; i++) {
	console.log(myStack.arr[i]);
}

console.log(stackPeek(myStack));
console.log(stackEmpty(myStack));