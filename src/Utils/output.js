// importing Utils 
import coordinate from '../Utils/coordinates'
import checkForDirt from '../Utils/checkForDirt'

const output = (data) => {
    // const { roomDimension, roombaLocation, currentDirtLocation, drivingInstructions } = userData;
    const { roomDimension, roombaLocation, dirtLocation, drivingInstructions, dirtCollected, wallsHit } = data;

    let currentRoombaLocation = roombaLocation;
    let dirtCollectedPerStep = 0;
    let wallHitByStep = wallsHit;
    let distanceTraveledPerStep = 0;
    let results = [];
    let currentDirtLocation = dirtLocation
    let currentDrivingInstructions = drivingInstructions

    console.log(`current Roomba Location ${currentRoombaLocation} this is how this starts`); 
    console.log(`This is the current the dirt location ${currentDirtLocation} `); 

    results.push({
        step: '1',
        currentRoombaLocation: `[${currentRoombaLocation[0]}, ${currentRoombaLocation[1]}]`,
        dirtCollectedPerStep,
        wallHitByStep
    });
    for (let i = 0; i < currentDrivingInstructions.length; i++) {
        if (currentDrivingInstructions[i] === 'N') {

            if (coordinate.checkIfMaxY(currentRoombaLocation[1], roomDimension[1])) {
                currentRoombaLocation[1] = currentRoombaLocation[1] + 1
                console.log(checkForDirt(currentRoombaLocation, currentDirtLocation), 'this should be a number ')
                dirtCollectedPerStep = dirtCollectedPerStep + checkForDirt(currentRoombaLocation, currentDirtLocation)
                // console.log(` Step ${i + 2} | Roomba location ${currentRoombaLocation}, | Action ${currentDrivingInstructions[i]}, |  dirt collected so far ${dirtCollectedPerStep}, wall hits ${wallHitByStep}`);
                distanceTraveledPerStep = distanceTraveledPerStep + 1;
                results.push({
                    step: i + 2,
                    currentDrivingInstructions: currentDrivingInstructions[i],
                    currentRoombaLocation: `[${currentRoombaLocation[0]}, ${currentRoombaLocation[1]}]`,
                    dirtCollectedPerStep,
                    wallHitByStep
                });
                // check max 
            } else {
                // this mean we hit a wall so we dont add, all we do is add a point to wall hit 
                wallHitByStep++;
                // then we report the new stats
                // console.log(` Step ${i + 2} |  Roomba location ${currentRoombaLocation}, | Action ${currentDrivingInstructions[i]}, |  dirt collected so far ${dirtCollectedPerStep}, wall hits ${wallHitByStep}`);
                results.push({
                    step: i + 2,
                    currentDrivingInstructions: currentDrivingInstructions[i],
                    currentRoombaLocation:`[${currentRoombaLocation[0]}, ${currentRoombaLocation[1]}]`,
                    dirtCollectedPerStep,
                    wallHitByStep
                });
            }

        }
        else if (currentDrivingInstructions[i] === 'S') {

            // if it comes back as true then we may go south 
            if (coordinate.checkIfZero(currentRoombaLocation[1])) {
                currentRoombaLocation[1] = currentRoombaLocation[1] - 1
                console.log(checkForDirt(currentRoombaLocation, currentDirtLocation), 'this should be a number ')
                dirtCollectedPerStep = dirtCollectedPerStep + checkForDirt(currentRoombaLocation, currentDirtLocation)
                // console.log(`Step ${i + 2} |  Roomba location ${currentRoombaLocation}, | Action ${currentDrivingInstructions[i]}, |  dirt collected so far ${dirtCollectedPerStep}, wall hits ${wallHitByStep}`);
                // check max 
                distanceTraveledPerStep = distanceTraveledPerStep + 1;
                results.push({
                    step: i + 2,
                    currentDrivingInstructions: currentDrivingInstructions[i],
                    currentRoombaLocation:`[${currentRoombaLocation[0]}, ${currentRoombaLocation[1]}]`,
                    dirtCollectedPerStep,
                    wallHitByStep
                });
            } else {
                // this mean we hit a wall so we dont add, all we do is add a point to wall hit 
                wallHitByStep++;
                // then we report the new stats
                // console.log(`Step ${i + 2} |  Roomba location ${currentRoombaLocation}, | Action ${currentDrivingInstructions[i]}, |  dirt collected so far ${dirtCollectedPerStep}, wall hits ${wallHitByStep}`);
                results.push({
                    step: i + 2,
                    currentDrivingInstructions: currentDrivingInstructions[i],
                    currentRoombaLocation:`[${currentRoombaLocation[0]}, ${currentRoombaLocation[1]}]`,
                    dirtCollectedPerStep,
                    wallHitByStep
                });
            }

        }
        else if (currentDrivingInstructions[i] === 'E') {

            if (coordinate.checkIfMaxX(currentRoombaLocation[0], roomDimension[0])) {
                currentRoombaLocation[0] = currentRoombaLocation[0] + 1
                console.log(checkForDirt(currentRoombaLocation, currentDirtLocation), 'this should be a number ')
                dirtCollectedPerStep = dirtCollectedPerStep + checkForDirt(currentRoombaLocation, currentDirtLocation)
                // console.log(`Step ${i + 2} |  Roomba location ${currentRoombaLocation}, | Action ${currentDrivingInstructions[i]}, |  dirt collected so far ${dirtCollectedPerStep}, wall hits ${wallHitByStep}`);
                // check max 
                distanceTraveledPerStep = distanceTraveledPerStep + 1;

                results.push({
                    step: i + 2,
                    currentDrivingInstructions: currentDrivingInstructions[i],
                    currentRoombaLocation:`[${currentRoombaLocation[0]}, ${currentRoombaLocation[1]}]`,
                    dirtCollectedPerStep,
                    wallHitByStep
                });
            } else {
                // this mean we hit a wall so we dont add, all we do is add a point to wall hit 
                wallHitByStep++;
                // then we report the new stats
                // console.log(`Step ${i + 2} |  Roomba location ${currentRoombaLocation}, | Action ${currentDrivingInstructions[i]}, |  dirt collected so far ${dirtCollectedPerStep}, wall hits ${wallHitByStep}`);
                results.push({
                    step: i + 2,
                    currentDrivingInstructions: currentDrivingInstructions[i],
                    currentRoombaLocation:`[${currentRoombaLocation[0]}, ${currentRoombaLocation[1]}]`,
                    dirtCollectedPerStep,
                    wallHitByStep
                });
            }

        }
        else if (currentDrivingInstructions[i] === 'W') {

            // if it comes back as true then we may go south 
            if (coordinate.checkIfZero(currentRoombaLocation[0])) {
                currentRoombaLocation[0] = currentRoombaLocation[0] - 1
                console.log(checkForDirt(currentRoombaLocation, currentDirtLocation), 'this should be a number ')
                dirtCollectedPerStep = dirtCollectedPerStep + checkForDirt(currentRoombaLocation, currentDirtLocation)
                // console.log(`Step ${i + 2} |  Roomba location ${currentRoombaLocation}, | Action ${currentDrivingInstructions[i]}, |  dirt collected so far ${dirtCollectedPerStep}, wall hits ${wallHitByStep}`);
                // check max 
                distanceTraveledPerStep = distanceTraveledPerStep + 1;
                results.push({
                    step: i + 2,
                    currentDrivingInstructions: currentDrivingInstructions[i],
                    currentRoombaLocation:`[${currentRoombaLocation[0]}, ${currentRoombaLocation[1]}]`,
                    dirtCollectedPerStep,
                    wallHitByStep
                });
            } else {
                // this mean we hit a wall so we dont add, all we do is add a point to wall hit 
                wallHitByStep++;
                // then we report the new stats
                // console.log(`Step ${i + 2} | Roomba location ${currentRoombaLocation}, | Action ${currentDrivingInstructions[i]}, |  dirt collected so far ${dirtCollectedPerStep}, wall hits ${wallHitByStep}`);
                results.push({
                    step: i + 2,
                    currentDrivingInstructions: currentDrivingInstructions[i],
                    currentRoombaLocation:`[${currentRoombaLocation[0]}, ${currentRoombaLocation[1]}]`,
                    dirtCollectedPerStep,
                    wallHitByStep
                });
            }

        }
    }

    results.push({
        step: results.length + 1,
        currentDrivingInstructions: ` done `,
        currentRoombaLocation:`[${currentRoombaLocation[0]}, ${currentRoombaLocation[1]}]`,
        dirtCollectedPerStep: dirtCollectedPerStep,
        wallHitByStep: wallHitByStep
    });
    console.log('this is the full result history')
    console.log(results);
    return results;
}

export default output;