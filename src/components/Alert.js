import Alert from 'react-bootstrap/Alert'

import React from 'react'

function AlertMsg(props) {
    const { msg } = props; 
    return (
        <Alert variant='primary'>
            {msg} 
        </Alert>
    )
}

export default AlertMsg; 
