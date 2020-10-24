import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Alert from '../components/Alert'
import DrivingCard from '../components/DrivingCard'
import {
    addDrivingInstructions,
    backspaceDrivingInstructions,
    clearDrivingInstructions,
    addRoomDimension,
    addRoombaLocation,
    addSubmitMessage
} from '../actions';
import { useDispatch, useSelector } from 'react-redux';

// importing Utils 
import coordinate from '../Utils/coordinates'
import checkForDirt from '../Utils/checkForDirt'

// importing dummy data for now 
import data from '../dummyData.json'


function Home(props) {

    const dispatch = useDispatch();

    const [
        clicked,
        roomDimension,
        roombaLocation,
        dirtLocation,
        drivingInstructions,
        submitMsg
    ] = useSelector((state) => [
        state.clicked,
        state.roomDimension,
        state.roombaLocation,
        state.dirtLocation,
        state.drivingInstructions,
        state.submitMsg
    ]);


    const formik = useFormik({
        initialValues: {
            xRoomDimension: 0,
            yRoomDimension: 0,
            xRoombaStarting: 0,
            yRoombaStarting: 0,
            // dirtLocation: [],
            // drivingInstructions: [],
        },
        // dirty 
        validationSchema: Yup.object().shape({
            xRoomDimension: Yup.number().required('Required').min(0, 'x coordinate must be zero or greater'),
            yRoomDimension: Yup.number().required('Required').min(0, 'y coordinate must be zero or greater'),
            xRoombaStarting: Yup.number().required('Required').min(0, 'x Roomba coordinate must be zero or greater'),
            yRoombaStarting: Yup.number().required('Required').min(0, 'y Roomba coordinate must be zero or greater'),
            // dirtLocation: Yup.array().of(Yup.array()).required('Required').min(1, 'You must enter at least one dirt location'),
            // drivingInstructions: Yup.array().of(Yup.string()).required('Required').min(1, 'You must enter at least one driving instruction'),
        }),

        onSubmit: (values) => {
            console.log(values)
            // here we will add the starting values for roomba 
            dispatch(addRoomDimension([values.xRoomDimension, values.yRoomDimension]))
            dispatch(addRoombaLocation([values.xRoombaStarting, values.yRoombaStarting]))

            dispatch(addSubmitMessage('your info has been submitted 😊, your result are available in the Results page!'))
            setTimeout(function () {
                dispatch(addSubmitMessage(''));
            }, 4000);//run this thing in 2 seconds to clear the message 
        },


    });


    const north = () => dispatch(addDrivingInstructions('N'));
    const south = () => dispatch(addDrivingInstructions('S'));
    const east = () => dispatch(addDrivingInstructions('E'));
    const west = () => dispatch(addDrivingInstructions('W'));
    const backspace = () => dispatch(backspaceDrivingInstructions());
    const clear = () => dispatch(clearDrivingInstructions());

    // when the data is submitted this function will run and dispatch the results 
    // which will then be displayed in the in the results page 
    // const output = (userData) => {
    //     // const { roomDimension, initialRoombaLocation, dirtLocation, drivingInstructions } = object;
    //     console.log(dirtLocation, 'this is the dirt location array thing ')
    //     // dirtCollected = 0;
    //     // wallsHit = 0;
    //     // distanceTraveled = 0; // starts at one to count the initial position
    //     currentRoombaLocation = roombaLocation;

    //     console.log(` Step 1 | initial Roomba location ${roombaLocation}, ----- , dirt collected so far ${dirtCollected}, wall hits ${wallsHit}`);
    //     for (let i = 0; i < drivingInstructions.length; i++) {
    //         if (drivingInstructions[i] === 'N') {

    //             if (checkIfMaxY(currentRoombaLocation[1], roomDimension[1])) {
    //                 currentRoombaLocation[1] = currentRoombaLocation[1] + 1

    //                 dirtCollected += checkForDirt(currentRoombaLocation, dirtLocation)
    //                 console.log(` Step ${i + 2} | Roomba location ${currentRoombaLocation}, | Action ${drivingInstructions[i]}, |  dirt collected so far ${dirtCollected}, wall hits ${wallsHit}`);
    //                 // check max 
    //                 distanceTraveled++;
    //             } else {
    //                 // this mean we hit a wall so we dont add, all we do is add a point to wall hit 
    //                 wallsHit++;
    //                 // then we report the new stats
    //                 console.log(` Step ${i + 2} |  Roomba location ${currentRoombaLocation}, | Action ${drivingInstructions[i]}, |  dirt collected so far ${dirtCollected}, wall hits ${wallsHit}`);
    //             }

    //         }
    //         else if (drivingInstructions[i] === 'S') {

    //             // if it comes back as true then we may go south 
    //             if (checkIfZero(currentRoombaLocation[1])) {
    //                 currentRoombaLocation[1] = currentRoombaLocation[1] - 1

    //                 dirtCollected += checkForDirt(currentRoombaLocation, dirtLocation)
    //                 console.log(`Step ${i + 2} |  Roomba location ${currentRoombaLocation}, | Action ${drivingInstructions[i]}, |  dirt collected so far ${dirtCollected}, wall hits ${wallsHit}`);
    //                 // check max 
    //                 distanceTraveled++;
    //             } else {
    //                 // this mean we hit a wall so we dont add, all we do is add a point to wall hit 
    //                 wallsHit++;
    //                 // then we report the new stats
    //                 console.log(`Step ${i + 2} |  Roomba location ${currentRoombaLocation}, | Action ${drivingInstructions[i]}, |  dirt collected so far ${dirtCollected}, wall hits ${wallsHit}`);
    //             }

    //         }
    //         else if (drivingInstructions[i] === 'E') {

    //             if (checkIfMaxX(currentRoombaLocation[0], roomDimension[0])) {
    //                 currentRoombaLocation[0] = currentRoombaLocation[0] + 1

    //                 dirtCollected += checkForDirt(currentRoombaLocation, dirtLocation)
    //                 console.log(`Step ${i + 2} |  Roomba location ${currentRoombaLocation}, | Action ${drivingInstructions[i]}, |  dirt collected so far ${dirtCollected}, wall hits ${wallsHit}`);
    //                 // check max 
    //                 distanceTraveled++;
    //             } else {
    //                 // this mean we hit a wall so we dont add, all we do is add a point to wall hit 
    //                 wallsHit++;
    //                 // then we report the new stats
    //                 console.log(`Step ${i + 2} |  Roomba location ${currentRoombaLocation}, | Action ${drivingInstructions[i]}, |  dirt collected so far ${dirtCollected}, wall hits ${wallsHit}`);
    //             }

    //         }
    //         else if (drivingInstructions[i] === 'W') {

    //             // if it comes back as true then we may go south 
    //             if (checkIfZero(currentRoombaLocation[0])) {
    //                 currentRoombaLocation[0] = currentRoombaLocation[0] - 1

    //                 dirtCollected += checkForDirt(currentRoombaLocation, dirtLocation)
    //                 console.log(`Step ${i + 2} |  Roomba location ${currentRoombaLocation}, | Action ${drivingInstructions[i]}, |  dirt collected so far ${dirtCollected}, wall hits ${wallsHit}`);
    //                 // check max 
    //                 distanceTraveled++;
    //             } else {
    //                 // this mean we hit a wall so we dont add, all we do is add a point to wall hit 
    //                 wallsHit++;
    //                 // then we report the new stats
    //                 console.log(`Step ${i + 2} | Roomba location ${currentRoombaLocation}, | Action ${drivingInstructions[i]}, |  dirt collected so far ${dirtCollected}, wall hits ${wallsHit}`);
    //             }

    //         }
    //     }
    //     console.log(`
    //     final location is ${roombaLocation}
    //     total dirt collected ${dirtCollected}
    //     total distance Traveled was ${distanceTraveled} steps, 
    //     total wall hits ${wallsHit}
    //     `);
    // }








    return (
        <Container fluid>
            <Row>
                <Col md={{ span: 9, offset: 3 }}>
                    <Form onSubmit={formik.handleSubmit} >
                        <Form.Row>
                            <Col xs={7}>
                                <Row>
                                    <Col xs={12}>
                                        <Form.Label>Room Dimensions </Form.Label>
                                    </Col>
                                    <Col xs={6}>
                                        <Form.Text>Starting x dimension</Form.Text>
                                        <Form.Control
                                            type="number"
                                            name="xRoomDimension"
                                            isInvalid={formik.errors.xRoomDimension}
                                            {...formik.getFieldProps('xRoomDimension')} />
                                        <Form.Control.Feedback type="invalid">
                                            {formik.errors.xRoomDimension}
                                        </Form.Control.Feedback>
                                    </Col>
                                    <Col xs={6}>
                                        <Form.Text>Starting y dimension</Form.Text>
                                        <Form.Control
                                            type="number"
                                            name="yRoomDimension"
                                            isInvalid={formik.errors.yRoomDimension}
                                            {...formik.getFieldProps('yRoomDimension')} />
                                        <Form.Control.Feedback type="invalid">
                                            {formik.errors.yRoomDimension}
                                        </Form.Control.Feedback>
                                    </Col>
                                    <Col xs={12} className='mt-4' >
                                        <Form.Label>Roomba Starting Location </Form.Label>
                                    </Col>
                                    <Col xs={6}>
                                        <Form.Text>Starting x coordinate</Form.Text>
                                        <Form.Control
                                            type="number"
                                            name="xRoombaStarting"
                                            isInvalid={formik.errors.xRoombaStarting}
                                            {...formik.getFieldProps('xRoombaStarting')} />
                                        <Form.Control.Feedback type="invalid">
                                            {formik.errors.xRoombaStarting}
                                        </Form.Control.Feedback>
                                    </Col>
                                    <Col xs={6}>
                                        <Form.Text>Starting y coordinate</Form.Text>
                                        <Form.Control
                                            type="number"
                                            name="yRoombaStarting"
                                            isInvalid={formik.errors.yRoombaStarting}
                                            {...formik.getFieldProps('yRoombaStarting')} />
                                        <Form.Control.Feedback type="invalid">
                                            {formik.errors.yRoombaStarting}
                                        </Form.Control.Feedback>
                                    </Col>
                                    <Col xs={6} className='mt-4' >
                                        <Button size='lg' variant="primary" type="submit">
                                            Submit
                                        </Button>
                                        <Form.Control.Feedback type="isValid">
                                            {
                                                submitMsg ? <Alert msg={submitMsg} /> : ''
                                            }
                                        </Form.Control.Feedback>
                                    </Col>
                                    <Col xs={6} className='mt-4' >
                                        <Row>
                                            <Col xs={12} className='mt-4' >
                                                <DrivingCard
                                                    drivingInstructions={drivingInstructions}
                                                    clicked={clicked}
                                                />
                                            </Col>
                                            <Col xs={3} className='mt-4' >
                                                <Button size="lg" onClick={north} >North</Button>
                                            </Col>
                                            <Col xs={3} className='mt-4' >
                                                <Button size="lg" onClick={south} >South</Button>
                                            </Col>
                                            <Col xs={3} className='mt-4' >
                                                <Button className='pr-4' size="lg" onClick={east} >East</Button>
                                            </Col>
                                            <Col xs={3} className='mt-4' >
                                                <Button size="lg" onClick={west} >West</Button>
                                            </Col>
                                            <Col xs={6} className='mt-4' >
                                                <Button block size="lg" onClick={backspace} >
                                                    <i class="fas fa-backspace"></i>
                                                </Button>
                                            </Col>
                                            <Col xs={6} className='mt-4' >
                                                <Button block size="lg" onClick={clear} >Clear</Button>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                        </Form.Row>
                    </Form>

                </Col>
            </Row >
        </Container >

    );
}

export default Home;