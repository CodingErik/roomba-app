// * Roomba App
// todo 

// * user given input // this is what our program will take in  
// ? this will be collected as a JSON, we can collect this from a form or something like this 
// room dimensions                  // type Array [x,y]  // [5,10]  5 units wide 10 units high  // *** [DONE]
// intial location of the roomba    // type Array [x,y]                                         // *** [DONE]
// dirt locations                   // type Array [x,y] // dirt location is specified like this 
// driving instructions             // given in an Array of string ['N','S','E','W']

// * output expected from client         
// final location of the roomba     
// total amount of dirt collected    // dirtCollected type integer      // incremented by dirt collected
// total amount of wall hits         // wallHits type integer          // incremented by each wall hit
// total amount of distance traveled // distanceTraveled type integer  // incremented by each step 



// ! roomba should not move but just record a wall hit 




// *** when results are given the user will be redirected 

 



   // when the data is submitted this function will run and dispatch the results 
    // which will then be displayed in the in the results page 
    // const output = (userData) => {
    //     // const { roomDimension, initialRoombaLocation, dirtLocation, drivingInstructions } = object;
    //     console.log(dirtLocation, 'this is the dirt location array thing ')
    //     // dirtCollected = 0;
    //     // wallsHit = 0;
    //     // distanceTraveled = 0; // starts at one to count the initial position
    //     currentRoombaLocation = roombaLocation;

    //     console.log(` Step 1 | initial Roomba location ${roombaLocation}, ----- , dirt collected so far ${dirtCollected}, wall hits ${wallsHit}`);
    //     for (let i = 0; i < drivingInstructions.length; i++) {
    //         if (drivingInstructions[i] === 'N') {

    //             if (checkIfMaxY(currentRoombaLocation[1], roomDimension[1])) {
    //                 currentRoombaLocation[1] = currentRoombaLocation[1] + 1

    //                 dirtCollected += checkForDirt(currentRoombaLocation, dirtLocation)
    //                 console.log(` Step ${i + 2} | Roomba location ${currentRoombaLocation}, | Action ${drivingInstructions[i]}, |  dirt collected so far ${dirtCollected}, wall hits ${wallsHit}`);
    //                 // check max 
    //                 distanceTraveled++;
    //             } else {
    //                 // this mean we hit a wall so we dont add, all we do is add a point to wall hit 
    //                 wallsHit++;
    //                 // then we report the new stats
    //                 console.log(` Step ${i + 2} |  Roomba location ${currentRoombaLocation}, | Action ${drivingInstructions[i]}, |  dirt collected so far ${dirtCollected}, wall hits ${wallsHit}`);
    //             }

    //         }
    //         else if (drivingInstructions[i] === 'S') {

    //             // if it comes back as true then we may go south 
    //             if (checkIfZero(currentRoombaLocation[1])) {
    //                 currentRoombaLocation[1] = currentRoombaLocation[1] - 1

    //                 dirtCollected += checkForDirt(currentRoombaLocation, dirtLocation)
    //                 console.log(`Step ${i + 2} |  Roomba location ${currentRoombaLocation}, | Action ${drivingInstructions[i]}, |  dirt collected so far ${dirtCollected}, wall hits ${wallsHit}`);
    //                 // check max 
    //                 distanceTraveled++;
    //             } else {
    //                 // this mean we hit a wall so we dont add, all we do is add a point to wall hit 
    //                 wallsHit++;
    //                 // then we report the new stats
    //                 console.log(`Step ${i + 2} |  Roomba location ${currentRoombaLocation}, | Action ${drivingInstructions[i]}, |  dirt collected so far ${dirtCollected}, wall hits ${wallsHit}`);
    //             }

    //         }
    //         else if (drivingInstructions[i] === 'E') {

    //             if (checkIfMaxX(currentRoombaLocation[0], roomDimension[0])) {
    //                 currentRoombaLocation[0] = currentRoombaLocation[0] + 1

    //                 dirtCollected += checkForDirt(currentRoombaLocation, dirtLocation)
    //                 console.log(`Step ${i + 2} |  Roomba location ${currentRoombaLocation}, | Action ${drivingInstructions[i]}, |  dirt collected so far ${dirtCollected}, wall hits ${wallsHit}`);
    //                 // check max 
    //                 distanceTraveled++;
    //             } else {
    //                 // this mean we hit a wall so we dont add, all we do is add a point to wall hit 
    //                 wallsHit++;
    //                 // then we report the new stats
    //                 console.log(`Step ${i + 2} |  Roomba location ${currentRoombaLocation}, | Action ${drivingInstructions[i]}, |  dirt collected so far ${dirtCollected}, wall hits ${wallsHit}`);
    //             }

    //         }
    //         else if (drivingInstructions[i] === 'W') {

    //             // if it comes back as true then we may go south 
    //             if (checkIfZero(currentRoombaLocation[0])) {
    //                 currentRoombaLocation[0] = currentRoombaLocation[0] - 1

    //                 dirtCollected += checkForDirt(currentRoombaLocation, dirtLocation)
    //                 console.log(`Step ${i + 2} |  Roomba location ${currentRoombaLocation}, | Action ${drivingInstructions[i]}, |  dirt collected so far ${dirtCollected}, wall hits ${wallsHit}`);
    //                 // check max 
    //                 distanceTraveled++;
    //             } else {
    //                 // this mean we hit a wall so we dont add, all we do is add a point to wall hit 
    //                 wallsHit++;
    //                 // then we report the new stats
    //                 console.log(`Step ${i + 2} | Roomba location ${currentRoombaLocation}, | Action ${drivingInstructions[i]}, |  dirt collected so far ${dirtCollected}, wall hits ${wallsHit}`);
    //             }

    //         }
    //     }
    //     console.log(`
    //     final location is ${roombaLocation}
    //     total dirt collected ${dirtCollected}
    //     total distance Traveled was ${distanceTraveled} steps, 
    //     total wall hits ${wallsHit}
    //     `);
    // }
