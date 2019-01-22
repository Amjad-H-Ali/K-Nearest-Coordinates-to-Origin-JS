console.log("K Nearest Coordinates to Origin");

// To instantiate a coordinate object
class Coordinate {
	constructor() {
		// Generates random values -10-10
		this.x = Math.floor(Math.random() * 21) - 10 ;
		// Generates random values -10-10
		this.y = Math.floor(Math.random() * 21) - 10;
	}
}

// Generates array of given size with coordinate objects
const randomCoordinatesArray = (size) => {

	const array =[];

	for(let i = 0; i < size; i ++ )

		array.push(new Coordinate());

	return array;
}

const coordinates = randomCoordinatesArray(10);

// Function that finds K coordinates nearest to the origin (0, 0) on a Cartesian plane.
const nearestCoordinates = (pointsArray, k) => {
	// Call maxHeap for each parent node in k size array
	for(let indx = (k/2) - 1; i >= 0; i --) 
		maxHeap(pointsArray, i, k)
	
}