const process = require('process');

function simulateElevator(startFloor, destinationFloors, travelTimePerFloor = 10) {
    /**
     * Simulates an elevator traveling between floors.
     *
     * @param {number} startFloor - The floor where the elevator starts
     * @param {number[]} destinationFloors - List of floors to visit in order
     * @param {number} travelTimePerFloor - Time taken to move one floor (default: 10 seconds)
     * @returns {void} Prints total travel time and the order of floors visited
     */
    if (destinationFloors.length === 0) {
        console.log("No destination floors provided.");
        return;
    }

    let totalTime = 0;
    let currentFloor = startFloor;
    let visitOrder = [currentFloor];

    for (let floor of destinationFloors) {
        totalTime += Math.abs(floor - currentFloor) * travelTimePerFloor;
        visitOrder.push(floor);
        currentFloor = floor;
    }

    console.log(totalTime, visitOrder.join(','));
}

if (require.main === module) {
    if (process.argv.length < 4) {
        console.log("Usage: node elevator.js startFloor floor1 floor2 ... floorN");
        process.exit(1);
    }

    const startFloor = parseInt(process.argv[2], 10);
    const destinationFloors = process.argv.slice(3).map(Number);

    simulateElevator(startFloor, destinationFloors);
}
const process = require('process');

function simulateElevator(startFloor, destinationFloors, travelTimePerFloor = 10) {
    /**
     * Simulates an elevator traveling between floors.
     *
     * @param {number} startFloor - The floor where the elevator starts
     * @param {number[]} destinationFloors - List of floors to visit in order
     * @param {number} travelTimePerFloor - Time taken to move one floor (default: 10 seconds)
     * @returns {void} Prints total travel time and the order of floors visited
     */
    if (destinationFloors.length === 0) {
        console.log("No destination floors provided.");
        return;
    }

    let totalTime = 0;
    let currentFloor = startFloor;
    let visitOrder = [currentFloor];

    for (let floor of destinationFloors) {
        totalTime += Math.abs(floor - currentFloor) * travelTimePerFloor;
        visitOrder.push(floor);
        currentFloor = floor;
    }

    console.log(totalTime, visitOrder.join(','));
}

if (require.main === module) {
    if (process.argv.length < 4) {
        console.log("Usage: node elevator.js startFloor floor1 floor2 ... floorN");
        process.exit(1);
    }

    const startFloor = parseInt(process.argv[2], 10);
    const destinationFloors = process.argv.slice(3).map(Number);

    simulateElevator(startFloor, destinationFloors);
}
