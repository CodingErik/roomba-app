import React from 'react'


function View(props) {
    const { data } = props; 
    console.log(data); 
    return (
        <div>
            this is the data for the session 
        </div>
    )
}


export default View; 