const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => 
{
  // Write your code here
	let ans=[];
	int sum=0;
	let carr=[];
	for(let i=0;i<arr.length;i++)
	{
		if(arr[i]+sum<=n){
			carr.push(arr[i]);
		}
		else
		{
			ans.push(carr);
			carr=[arr[i]];
		}
	}
	ans.push(carr);
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
