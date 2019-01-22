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

// Swaps elements in array
const swap = (arr, indx1, indx2) => {
	const temp = arr[indx1];

	arr[indx1] = arr[indx2];

	arr[indx2] = temp;
}

// Function that finds K coordinates nearest to the origin (0, 0) on a Cartesian plane.
const nearestCoordinates = (pointsArray, k) => {

	// Call maxHeap for each parent node in k size array
	for(let i = Math.floor(k/2) - 1; i >= 0; i --) 
		maxHeap(pointsArray, i, k)

	// Once k portion is in max heap, iterate through rest of array and check if there is a coordinate with a smaller
	// relative distance than the root node. If there is, swap the elements and rearrange k portion into a max heap.
	// Relative distance of a coordinate is A squared + B squared.
	for(let i = k; i < pointsArray.length; i ++){

		if(pointsArray[i].x**2 + pointsArray[i].y**2 < pointsArray[0].x**2 + pointsArray[0].y**2){
			swap(pointsArray, i, 0);
			maxHeap(pointsArray, 0, k);
		}
	}

	// Print k portion of array
	
	console.log("Nearest ones: ", pointsArray.slice(0, k));
}

// Function arranges an array into a max-heap based on relative distance
const maxHeap = (pointsArray, indx, size) => {

	let largest = indx;

	const left  = (indx * 2) + 1,
		  right	= left + 1;

	// Comparing the relative distances of the coordinates which is A squared + B squared.
	if(left < size && pointsArray[left].x**2 + pointsArray[left].y**2 > pointsArray[largest].x**2 + pointsArray[largest].y**2)

		largest = left;

	if(right < size && pointsArray[right].x**2 + pointsArray[right].y**2 > pointsArray[largest].x**2 + pointsArray[largest].y**2)

		largest = right;

	if(largest != indx) {
		swap(pointsArray, indx, largest);
		maxHeap(pointsArray, largest, size)
	}
}


const coordinates = randomCoordinatesArray(10);

console.log("Coordinates: ", coordinates);

nearestCoordinates(coordinates, 3);










