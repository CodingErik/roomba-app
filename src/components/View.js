import React from 'react'
import Table from 'react-bootstrap/Table'
import TableCell from './TableCell'


function View(props) {
    const { data } = props;

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Step #</th>
                    <th>Roomba Location</th>
                    <th>Action</th>
                    <th>Total Dirt Collected </th>
                    <th>Total Walls hit </th>
                </tr>
            </thead>
            <tbody>
               {data.map(eachStep => <TableCell {...eachStep} />)}
            </tbody>
        </Table>
    )
}


export default View; 