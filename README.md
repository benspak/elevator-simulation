# Elevator Simulation

## Overview
This project simulates an elevator traveling between floors based on user input. The simulation calculates the total travel time based on a constant time of **10 seconds per floor** and prints the order of floors visited.

## How It Works
The script takes input from the command line and executes the following steps:
1. Reads the starting floor and destination floors from the command line arguments.
2. Iterates through the list of floors, calculating the total travel time based on the difference between consecutive floors.
3. Prints the total travel time and the order of floors visited.

## Usage
To run the program, use the following command:
```sh
node elevator.js <start_floor> <floor1> <floor2> ... <floorN>
```
Example:
```sh
node elevator.js 12 2 9 1 32
```
### Expected Output
```
560 12,2,9,1,32
```
- `560` is the total travel time in seconds.
- `12,2,9,1,32` is the order of floors visited.

## Code Breakdown
### `simulateElevator(startFloor, destinationFloors, travelTimePerFloor = 10)`
This function simulates the movement of the elevator:
- **Inputs:**
  - `startFloor`: The floor where the elevator starts.
  - `destinationFloors`: An array of floors to visit in order.
  - `travelTimePerFloor`: The time taken to move one floor (default is `10` seconds).
- **Process:**
  - If no destination floors are provided, the program exits with a message.
  - The function calculates the travel time by iterating through the destination floors and summing up the absolute differences between consecutive floors, multiplied by `travelTimePerFloor`.
  - The visit order is stored and printed at the end.

### `if (require.main === module)`
- This ensures the script runs only when executed directly.
- It checks if at least two arguments (start floor and one destination floor) are provided.
- It reads command-line arguments, converts them to numbers, and calls `simulateElevator()`.

## Assumptions
- The input floors are given as integers.
- The elevator moves in the order provided by the user.
- Each floor transition takes exactly **10 seconds**.
- The elevator doesn't stop for passengers, it only moves between given floors.

## Features Not Implemented
- Error handling for invalid inputs (e.g., non-numeric values).
- User interaction to dynamically add floors.
- Optimization to reorder floors for minimal travel time.

## Future Improvements
- Add an interactive mode where users can input floors dynamically.
- Implement an optimized path calculation to minimize total travel time.
- Enhance the script with GUI or web-based visualization.

---
This project serves as a simple demonstration of algorithmic thinking and command-line scripting in JavaScript. 🚀
