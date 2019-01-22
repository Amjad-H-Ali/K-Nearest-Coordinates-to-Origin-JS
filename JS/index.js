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

console.log(randomCoordinatesArray(5));