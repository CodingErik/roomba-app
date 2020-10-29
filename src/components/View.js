import React from 'react'
import Table from 'react-bootstrap/Table'
import TableCell from './TableCell'


function View(props) {
    const { data } = props;
    console.log('is the data getting in the view? ')
    console.log(data)

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
               {/* {data.map(eachStep => <TableCell {...eachStep} />)} */}
            </tbody>
        </Table>
    )
}


export default View; 