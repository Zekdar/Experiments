function generateArray(width) {	
	let array = []

	for (let i = -Math.floor(width / 2); i  < width / 2; i++) {
		array.push(i)
	}

	return array
}

function shuffle(array) {
	let shuffledIntegers = [...array]

	return shuffledIntegers.map((_, index) => {
		let switchPosition = getRandomInt(0, shuffledIntegers.length)		
		return swap(index, switchPosition, shuffledIntegers)
	})
}

function swap(indexA, indexB, array) {
	if(indexA < 0 || indexB < 0 || indexA > array.length - 1 || indexB > array.length - 1) 
		return array
	
	let swappingArray = [...array]
	let valA = swappingArray[indexA]
	let valB = swappingArray[indexB]

	swappingArray[indexA] = valB
	swappingArray[indexB] = valA

	return swappingArray
}

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

let arrayWitdh = process.argv.length >= 3 ? args = process.argv[2] : 10
let integers = generateArray(arrayWitdh)
let shuffledIntegers = shuffle(integers)

console.log(integers)
console.log(shuffledIntegers)