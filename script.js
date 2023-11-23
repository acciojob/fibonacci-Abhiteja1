function fibonacci(num) {
// your code here
	let fib =[0,1];
	for(let i=2;i<num;i++){
		let x = fib[i-2];
		let y = fib[i-1];
		fib.push(x+y);
	}
	return (fib[num-1]);
}
module.exports = fibonacci;
