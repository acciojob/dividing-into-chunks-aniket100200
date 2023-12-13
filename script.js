const arr = [1, 2, 3, 4, 0, 2, 2];

const divide = (arr, n) => {
	// Write your code here

	let ans = [];
	let sum = 0;
	let carr = [];
	for (let i = 0; i < arr.length; i++) {
		
		if (arr[i] + sum <= n) {
			carr.push(arr[i]);
			sum += arr[i];
		}
		else {
			ans.push(carr);
			carr = [arr[i]];
			sum = arr[i];
		}
	}
	ans.push(carr);
	return ans;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
