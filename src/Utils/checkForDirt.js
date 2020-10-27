function checkForDirt(currentLocation, arrayOfDirt) {
    let result = arrayOfDirt.filter(dirtSpot => {
        return dirtSpot[0] === currentLocation[0] && dirtSpot[1] === currentLocation[1]
    })
    // this returns an empty array if there are no matches or the location where there was dirt 
    if(result[0] === undefined){
        // console.log(`we are not collecting dirt `);
        return false; 
    }
    else{
        // console.log(`we are collecting dirt`);
        // we also could remove that array from the list of dirty location although not specified
        return true; 
    }
}

export default checkForDirt;