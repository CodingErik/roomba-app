import React from 'react'

export default function TableCell(props) {
    const { step,
        drivingInstructions,
        currentRoombaLocation,
        dirtCollectedPerStep,
        wallHitByStep,
    } = props; 
    console.log('this is inside the table cell')
    console.log(props)

    return (
        <tr>
            <td>{step}</td>
            <td>{currentRoombaLocation}</td>
            <td>{drivingInstructions}</td>
            <td>{dirtCollectedPerStep}</td>
            <td>{wallHitByStep}</td>
        </tr>
    )
}
