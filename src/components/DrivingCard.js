import Card from 'react-bootstrap/Card'
import React from 'react'

export default function DrivingCard(props) {
    const {
        drivingInstructions,
        clicked
    } = props; 
    return (
        <Card>
            <Card.Body>
                <Card.Title>Driving Instructions</Card.Title>
                <Card.Text>
                    [{clicked && drivingInstructions? drivingInstructions + ',': 'Enter your driving directions for Roomba by pressing the buttons!'}]
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
