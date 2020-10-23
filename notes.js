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

let userData =
{
    roomDimension: [10, 10],
    initialRoombaLocation: [1, 1],
    dirtLocation: [
        [1, 2],
        [3, 5],
        [5, 5],
        [7, 9],
    ],
    drivingInstructions: [
        'N',
        'E',
        'E',
        'N',
        'N',
        'N',
        'E',
        'E',
        'S',
        'W',
        'S',
        'S',
        'S',
        'S',
        'S',
    ]
}

function checkForDirt(currentLocation, arrayOfDirt) {
    let result = arrayOfDirt.filter(dirtSpot => {
        return dirtSpot[0] === currentLocation[0] && dirtSpot[1] === currentLocation[1]
    })
    // this returns an empty array if there are no matches or the location where there was dirt 
    if(result[0] === undefined){
        console.log(`we are not collecting dirt `);
        return 0; 
    }
    else{
        console.log(`we are collecting dirt`);
        // we also could remove that array from the list of dirty location although not specified
        return 1; 
    }
}
 

const coordinatesCheckIfMaxY = (y, yMaxDimension) => {
    return y !== yMaxDimension;
};

const coordinatesCheckIfMaxX = (x, xMaxDimension) => {
    return x !== xMaxDimension;
};

const coordinatesCheckIfZero = (xory) => {
    return xory > 0;
}

function output(object) {
    const { roomDimension, initialRoombaLocation, dirtLocation, drivingInstructions } = object;
    console.log(dirtLocation, 'this is the dirt location array thing ')
    dirtCollected = 0;
    wallsHit = 0;
    distanceTraveled = 0; // starts at one to count the initial position
    currentRoombaLocation = initialRoombaLocation; 

    console.log(` Step 1 | initial Roomba location ${initialRoombaLocation}, ----- , dirt collected so far ${dirtCollected}, wall hits ${wallsHit}`);
    for (let i = 0; i < drivingInstructions.length; i++) {
        if (drivingInstructions[i] === 'N') {

            if(coordinatesCheckIfMaxY(currentRoombaLocation[1], roomDimension[1])){
                currentRoombaLocation[1] = currentRoombaLocation[1] + 1
                
                dirtCollected += checkForDirt(currentRoombaLocation, dirtLocation)
                console.log(` Step ${i + 2} | Roomba location ${currentRoombaLocation}, | Action ${drivingInstructions[i]}, |  dirt collected so far ${dirtCollected}, wall hits ${wallsHit}`); 
                // check max 
                distanceTraveled++;
            }else{
                // this mean we hit a wall so we dont add, all we do is add a point to wall hit 
                wallsHit++; 
                // then we report the new stats
                console.log(` Step ${i + 2} |  Roomba location ${currentRoombaLocation}, | Action ${drivingInstructions[i]}, |  dirt collected so far ${dirtCollected}, wall hits ${wallsHit}`); 
            }
                
        }
        else if (drivingInstructions[i] === 'S') {

            // if it comes back as true then we may go south 
            if(coordinatesCheckIfZero(currentRoombaLocation[1])){
                currentRoombaLocation[1] = currentRoombaLocation[1] - 1
                
                dirtCollected += checkForDirt(currentRoombaLocation, dirtLocation)
                console.log(`Step ${i + 2} |  Roomba location ${currentRoombaLocation}, | Action ${drivingInstructions[i]}, |  dirt collected so far ${dirtCollected}, wall hits ${wallsHit}`); 
                // check max 
                distanceTraveled++;
            }else{
                // this mean we hit a wall so we dont add, all we do is add a point to wall hit 
                wallsHit++; 
                // then we report the new stats
                console.log(`Step ${i + 2} |  Roomba location ${currentRoombaLocation}, | Action ${drivingInstructions[i]}, |  dirt collected so far ${dirtCollected}, wall hits ${wallsHit}`); 
            }
                
        }
        else if (drivingInstructions[i] === 'E') {

            if(coordinatesCheckIfMaxX(currentRoombaLocation[0], roomDimension[0])){
                currentRoombaLocation[0] = currentRoombaLocation[0] + 1
                
                dirtCollected += checkForDirt(currentRoombaLocation, dirtLocation)
                console.log(`Step ${i + 2} |  Roomba location ${currentRoombaLocation}, | Action ${drivingInstructions[i]}, |  dirt collected so far ${dirtCollected}, wall hits ${wallsHit}`); 
                // check max 
                distanceTraveled++;
            }else{
                // this mean we hit a wall so we dont add, all we do is add a point to wall hit 
                wallsHit++; 
                // then we report the new stats
                console.log(`Step ${i + 2} |  Roomba location ${currentRoombaLocation}, | Action ${drivingInstructions[i]}, |  dirt collected so far ${dirtCollected}, wall hits ${wallsHit}`); 
            }
                
        }
        else if (drivingInstructions[i] === 'W') {

            // if it comes back as true then we may go south 
            if(coordinatesCheckIfZero(currentRoombaLocation[0])){
                currentRoombaLocation[0] = currentRoombaLocation[0] - 1
                
                dirtCollected += checkForDirt(currentRoombaLocation, dirtLocation)
                console.log(`Step ${i + 2} |  Roomba location ${currentRoombaLocation}, | Action ${drivingInstructions[i]}, |  dirt collected so far ${dirtCollected}, wall hits ${wallsHit}`); 
                // check max 
                distanceTraveled++;
            }else{
                // this mean we hit a wall so we dont add, all we do is add a point to wall hit 
                wallsHit++; 
                // then we report the new stats
                console.log(`Step ${i + 2} | Roomba location ${currentRoombaLocation}, | Action ${drivingInstructions[i]}, |  dirt collected so far ${dirtCollected}, wall hits ${wallsHit}`); 
            }
                
        }
    }
    console.log(`
    final location is ${initialRoombaLocation}
    total dirt collected ${dirtCollected}
    total distance Traveled was ${distanceTraveled} steps, 
    total wall hits ${wallsHit}
    `);
}

output(userData)