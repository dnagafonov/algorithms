const { fillPointMatrix, removeNulls, floyd} = require('./floyd-functions.js');


let adjacencyMatrix = [[0, 8, 5, 3, 0, 0, 0, 0, 0, 0],
					   [8, 0, 0, 0, 10, 5, 6, 4, 0, 0],
					   [5, 0, 0, 0, 0, 0, 2, 0, 0, 0],
    				   [3, 0, 0, 0, 0, 10, 0, 0, 0, 0],
    				   [0, 10, 0, 0, 0, 3, 0, 7, 0, 8],
    				   [0, 5, 0, 10, 3, 0, 0, 0, 0, 0],
    				   [0, 6, 2, 0, 0, 0, 0, 0, 11, 0],
    				   [0, 4, 0, 0, 7, 0, 0, 0, 9, 0],
    				   [0, 0, 0, 0, 0, 0, 11, 9, 0, 12],
    				   [0, 0, 0, 0, 8, 0, 0, 0, 12, 0]];

let adjancyMatrixWithINF = removeNulls(adjacencyMatrix);
let pointMatrix = fillPointMatrix(adjancyMatrixWithINF);
		
floyd(adjacencyMatrix, pointMatrix);