import Card from 'react-bootstrap/Card'
import React from 'react'

export default function DrivingCard(props) {
    const {
        drivingInstructions,
        clicked
    } = props;
    return (
        <div>
            <Card>
                <Card.Body>
                    <Card.Text>
                        {clicked && drivingInstructions ? drivingInstructions + ',' : 'click buttons to enter driving instructions here... '}
                </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}
