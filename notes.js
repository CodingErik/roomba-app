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
    roomDimension: [5, 5],
    initialRoombaLocation: [1, 1],
    dirtLocation: [
        [1, 2],
        [1, 3],
        [2, 5],
        [2, 9],
    ],
    drivingInstructions: [
        'N',
        'N',
        'W',
        'W',
        'W',
        'W',
        'W',
    ]
}

function checkForDirt(currentLocation, arrayOfDirt) {
    for (let i = 0; i < arrayOfDirt.length; i++) {
        if (arrayOfDirt[i][0] === currentLocation[0] && arrayOfDirt[i][1] === currentLocation[1]) {
            return 1;
        } else {
            return 0;
        }
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
    dirtCollected = 0;
    wallsHit = 0;
    distanceTraveled = 1; // starts at one to count the initial position
    currentRoombaLocation = initialRoombaLocation; 

    console.log(initialRoombaLocation, 'initial location')
    for (let i = 0; i < drivingInstructions.length; i++) {
        if (drivingInstructions[i] === 'N') {

            if(coordinatesCheckIfMaxY(currentRoombaLocation[1], roomDimension[1])){
                currentRoombaLocation[1] = currentRoombaLocation[1] + 1
                
                dirtCollected = dirtCollected + checkForDirt(currentRoombaLocation, dirtLocation)
                console.log(`current Roomba location ${currentRoombaLocation}, ${drivingInstructions[i]}, dirt collected so far ${dirtCollected}, wall hits ${wallsHit}`); 
                // check max 
            }else{
                // this mean we hit a wall so we dont add, all we do is add a point to wall hit 
                wallsHit++; 
                // then we report the new stats
                console.log(`current Roomba location ${currentRoombaLocation}, ${drivingInstructions[i]}, dirt collected so far ${dirtCollected}, wall hits ${wallsHit}`); 
            }
                

        }
        else if (drivingInstructions[i] === 'S') {

            // if it comes back as true then we may go south 
            if(coordinatesCheckIfZero(currentRoombaLocation[1])){
                currentRoombaLocation[1] = currentRoombaLocation[1] - 1
                
                dirtCollected = dirtCollected + checkForDirt(currentRoombaLocation, dirtLocation)
                console.log(`current Roomba location ${currentRoombaLocation}, ${drivingInstructions[i]}, dirt collected so far ${dirtCollected}, wall hits ${wallsHit}`); 
                // check max 
            }else{
                // this mean we hit a wall so we dont add, all we do is add a point to wall hit 
                wallsHit++; 
                // then we report the new stats
                console.log(`current Roomba location ${currentRoombaLocation}, ${drivingInstructions[i]}, dirt collected so far ${dirtCollected}, wall hits ${wallsHit}`); 
            }
                

        }
        else if (drivingInstructions[i] === 'E') {

            if(coordinatesCheckIfMaxX(currentRoombaLocation[0], roomDimension[0])){
                currentRoombaLocation[0] = currentRoombaLocation[0] + 1
                
                dirtCollected = dirtCollected + checkForDirt(currentRoombaLocation, dirtLocation)
                console.log(`current Roomba location ${currentRoombaLocation}, ${drivingInstructions[i]}, dirt collected so far ${dirtCollected}, wall hits ${wallsHit}`); 
                // check max 
            }else{
                // this mean we hit a wall so we dont add, all we do is add a point to wall hit 
                wallsHit++; 
                // then we report the new stats
                console.log(`current Roomba location ${currentRoombaLocation}, ${drivingInstructions[i]}, dirt collected so far ${dirtCollected}, wall hits ${wallsHit}`); 
            }
                

        }
        else if (drivingInstructions[i] === 'W') {

            // if it comes back as true then we may go south 
            if(coordinatesCheckIfZero(currentRoombaLocation[0])){
                currentRoombaLocation[0] = currentRoombaLocation[0] - 1
                
                dirtCollected = dirtCollected + checkForDirt(currentRoombaLocation, dirtLocation)
                console.log(`current Roomba location ${currentRoombaLocation}, ${drivingInstructions[i]}, dirt collected so far ${dirtCollected}, wall hits ${wallsHit}`); 
                // check max 
            }else{
                // this mean we hit a wall so we dont add, all we do is add a point to wall hit 
                wallsHit++; 
                // then we report the new stats
                console.log(`current Roomba location ${currentRoombaLocation}, ${drivingInstructions[i]}, dirt collected so far ${dirtCollected}, wall hits ${wallsHit}`); 
            }
                

        }
        
        

        distanceTraveled++;
    }
    console.log(`total distance Traveled was ${distanceTraveled} steps, final location is ${initialRoombaLocation}`);
}

output(userData)