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
	for(let i = (k/2) - 1; i >= 0; i --) 
		maxHeap(pointsArray, i, k)
	// Once k portion is in max heap, iterate through rest of array and check if there is a coordinate with a smaller
	// relative distance than the root node. If there is, swap the elements and rearrange k portion into a max heap.
	// Relative distance of a coordinate is A squared + B squared.
	for(let i = k; i < array.length; i ++){

		if(pointsArray[i].x**2 + pointsArray[i].y**2 < pointsArray[0].x**2 + pointsArray[0].y**2){
			swap(pointsArray, i, 0);
			maxHeap(pointsArray, 0, k);
		}
	}
	
}