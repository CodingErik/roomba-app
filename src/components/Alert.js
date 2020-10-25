import Alert from 'react-bootstrap/Alert'

import React from 'react'

function AlertMsg(props) {
    const { msg, color } = props; 
    return (
        <Alert variant={color}>
            {msg} 
        </Alert>
    )
}

export default AlertMsg; 
