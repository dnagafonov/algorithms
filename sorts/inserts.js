const { counter } = require("../util/counter.js");
const { swap } = require("../util/swap.js");


const insertSort = (arr) => {
	let step = counter();
	for(let i = 1; i != arr.length; ++i){
		let key = arr[i];
		let j = i;
		for(; j >= 0 && arr[j - 1] > key; j--){
			arr.swap(j, j - 1)
			console.log(`step ${step()} => ` + arr);
		}
		arr[j] = key;
	}
}

let arr = [3,6,7,3,4,1,5,3];
insertSort(arr);