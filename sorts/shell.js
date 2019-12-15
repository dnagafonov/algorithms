const { counter } = require("../util/counter.js");
const { swap } = require("../util/swap.js");


const shellSort = (arr) => {
	let step = counter();
	let h = 1;
	while(h < arr.length / 3){
		h = 3 * h + 1;
	}
	while(h > 0){
		for(let i = h; i < arr.length; ++i){
			for(let j = i; j > 0 && arr[j] < arr[j - h]; j -=h){
			arr.swap(j, j - h)
			}
			console.log(`step ${step()} => ` + arr);
		}
		h = --h / 3;
	}
}

let arr = [3,6,7,3,4,1,5,3];
shellSort(arr);