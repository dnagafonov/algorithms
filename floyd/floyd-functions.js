const fillPointMatrix = (adjacencyMatrix) => {
	let pointMatrix = [];
	for(let i = 0; i != adjacencyMatrix.length; ++i){
		for(let j = 0; j != adjacencyMatrix.length; ++j){
			pointMatrix[i]= [];
		}
	}
	for(let i = 0; i != adjacencyMatrix.length; ++i){
		for(let j = 0; j != adjacencyMatrix.length; ++j){
			pointMatrix[i][j] = j + 1;
		}
	}
	return pointMatrix;
}

function Step() {
	let step = 0;
	return function(){
		return ++step;
	}
}

const showMatrix = (matrix, Step) => {
	let str = '';
	console.log(`---step${Step()}---`);
	for(let i = 0; i != matrix.length; ++i){
		for(let j = 0; j != matrix.length; ++j){
			str += " " + matrix[i][j];
		}
		console.log(str);
		str = '';
	}
}

const floyd = (adjacencyMatrix, pointMatrix) => {
	const n = adjacencyMatrix.length;
	const step = Step();
	for(let k = 0; k < n; ++k){
		for(let i = 0; i < n; ++i){
			for(let j = 0; j < n; ++j){
				if(adjacencyMatrix[i][j] > adjacencyMatrix[i][k] + adjacencyMatrix[k][j] && i != k && j != k){
					adjacencyMatrix[i][j] = adjacencyMatrix[i][k] + adjacencyMatrix[k][j];
					pointMatrix[i][j] = k;
	    			showMatrix(adjacencyMatrix, step);
				}
			}
		}
	}
}	

module.exports = {fillPointMatrix, floyd};