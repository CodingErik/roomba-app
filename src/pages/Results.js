import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

// importing Utils 
import coordinate from '../Utils/coordinates'
import checkForDirt from '../Utils/checkForDirt'

function Results() {

    const dispatch = useDispatch();
    const [
        clicked,
        roomDimension,
        roombaLocation,
        dirtLocation,
        drivingInstructions,
        submitMsg,
        dirtCollected,
        wallsHit,
        distanceTraveled,
        submitted,
    ] = useSelector((state) => [
        state.submitted,
        state.clicked,
        state.roomDimension,
        state.roombaLocation,
        state.dirtLocation,
        state.drivingInstructions,
        state.submitMsg,
        state.dirtCollected,
        state.wallsHit,
        state.distanceTraveled
    ]);

    useEffect(() => {
        // as soon as the page load we will populate the results 
        // output(); 
    }, [])

    

    // return submitted ? (
    //     <h3>This is loading</h3>
    //   ) : error ? (
    //     <h3>{error}</h3>
    //   ) : (
    //     <PostsView posts={posts} />
    //   );
}

export default Results
