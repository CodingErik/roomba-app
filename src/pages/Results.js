import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

function Results() {

    const dispatch = useDispatch();

    // here we call the result 
    const [ results ] = useSelector((state) => [
        state.results
    ]);

    return (
        <div>
            this is the result page
        </div>
    )
}

export default Results
