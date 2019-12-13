const { fillPointMatrix, floyd} = require('./floyd-functions.js');

const INF = 99999;					   

let adjacencyMatrix = [[0, 8, 0, 0, 10],
					   [8, 0, 4, 0, 0],
					   [0, 4, 0, 6, 16],
    				   [0, 0, 6, 0, 2],
    				   [10, 0, 16, 2, 0]];

adjacencyMatrix.map((row, rowIndex) => 
			row.map((el, elIndex) => 
			(el[elIndex] == 0) ? el[elIndex] = INF : el[elIndex]));

console.log(adjacencyMatrix)

let pointMatrix = fillPointMatrix(adjacencyMatrix);

const min = (a,b) => a < b ? a : b;
		
floyd(adjacencyMatrix, pointMatrix);

//floyd();