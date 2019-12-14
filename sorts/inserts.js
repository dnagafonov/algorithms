const counter = () => {
	let step = 0;
	return () => ++step;
}

const insertSort = (arr) => {
	let step = counter();
	for(let i = 1; i != arr.length; ++i){
		let key = arr[i];
		let j = i - 1;
		for(; j >= 0 && arr[j] > key; j--){
			let temp = arr[j + 1];
			arr[j + 1] = arr[j];
			arr[j] = temp;
			console.log(`step ${step()} => ` + arr);
		}
		arr[j + 1] = key;
	}
}

let arr = [3,6,7,3,4,1,5,3];
insertSort(arr);