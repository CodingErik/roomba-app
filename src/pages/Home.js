import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Alert from '../components/Alert'
import View from '../components/View'
import DrivingCard from '../components/DrivingCard'
import {
    addDrivingInstructions,
    backspaceDrivingInstructions,
    clearDrivingInstructions,
    addRoomDimension,
    addRoombaLocation,
    addDirtLocation,
    addSubmitMessage,
    submitResults,
    postResults,
    increaseDistanceTraveled,
    increaseWallhit,
    increaseDirtCollected,
    increaseX,
    increaseY,
    decreaseX,
    decreaseY,
} from '../actions';
import { useDispatch, useSelector } from 'react-redux';

// importing Utils 
import coordinate from '../Utils/coordinates'
import checkForDirt from '../Utils/checkForDirt'

function Home(props) {
    const dispatch = useDispatch();

    const [results, setResults] = useState(false);

    const [
        submitted,
        clicked,
        roomDimension,
        roombaLocation,
        dirtLocation,
        drivingInstructions,
        submitMsg,
        dirtCollected,
        wallsHit,
        distanceTraveled,
    ] = useSelector((state) => [
        state.submitted,
        state.clicked,
        state.roomDimension,
        state.roombaLocation,
        state.dirtLocation,
        state.drivingInstructions,
        state.submitMsg,
        state.dirtCollected,
        state.wallsHit,
        state.distanceTraveled
    ]);

    const formik = useFormik({
        initialValues: {
            xRoomDimension: 0,
            yRoomDimension: 0,
            xRoombaStarting: 0,
            yRoombaStarting: 0,
            xDirtLocation: 0,
            yDirtLocation: 0,
        },
        validationSchema: Yup.object().shape({
            xRoomDimension: Yup.number().required('Required').min(0, 'x coordinate must be zero or greater'),
            yRoomDimension: Yup.number().required('Required').min(0, 'y coordinate must be zero or greater'),
            xRoombaStarting: Yup.number().required('Required').min(0, 'x Roomba coordinate must be zero or greater'),
            yRoombaStarting: Yup.number().required('Required').min(0, 'y Roomba coordinate must be zero or greater'),
            xDirtLocation: Yup.number().required('Required').min(0, 'x dirt coordinate must be zero or greater'),
            yDirtLocation: Yup.number().required('Required').min(0, 'y dirt coordinate must be zero or greater'),
        }),
        onSubmit: (values) => {
            // here we will add the starting values for roomba 
            dispatch(addRoomDimension([values.xRoomDimension, values.yRoomDimension]))
            dispatch(addRoombaLocation([values.xRoombaStarting, values.yRoombaStarting]))
            dispatch(addDirtLocation([values.xDirtLocation, values.yDirtLocation]))
            dispatch(addSubmitMessage('your info has been submitted 😊, your result are available in the Results page!'))
            dispatch(submitResults())

            setTimeout(function () {
                dispatch(addSubmitMessage(''));
            }, 4000);//run 2 seconds to clear the message 

        },
    });

    const north = () => dispatch(addDrivingInstructions('N'));
    const south = () => dispatch(addDrivingInstructions('S'));
    const east = () => dispatch(addDrivingInstructions('E'));
    const west = () => dispatch(addDrivingInstructions('W'));
    const backspace = () => dispatch(backspaceDrivingInstructions());
    const clear = () => dispatch(clearDrivingInstructions());
    //  when the data is submitted this function will run and dispatch the results 
    // which will then be displayed in the in the results page 

    const output = (data) => {
        // const { roomDimension, roombaLocation, dirtLocation, drivingInstructions } = userData;
        const { roomDimension, roombaLocation, dirtLocation, drivingInstructions, dirtCollected, wallsHit } = data;

        let currentRoombaLocation = roombaLocation;
        let dirtCollectedPerStep = dirtCollected;
        let wallHitByStep = wallsHit;
        let distanceTraveledPerStep = 0;
        let results = [];

        results.push({
            step: 'step 1',
            currentRoombaLocation,
            dirtCollectedPerStep,
            wallHitByStep
        });
        for (let i = 0; i < drivingInstructions.length; i++) {
            if (drivingInstructions[i] === 'N') {

                if (coordinate.checkIfMaxY(currentRoombaLocation[1], roomDimension[1])) {
                    currentRoombaLocation[1] = currentRoombaLocation[1] + 1

                    dirtCollectedPerStep += checkForDirt(currentRoombaLocation, dirtLocation)
                    // console.log(` Step ${i + 2} | Roomba location ${currentRoombaLocation}, | Action ${drivingInstructions[i]}, |  dirt collected so far ${dirtCollectedPerStep}, wall hits ${wallHitByStep}`);
                    distanceTraveledPerStep = distanceTraveledPerStep + 1;
                    results.push({
                        step: `Step ${i + 2}`,
                        drivingInstructions: `$ Current drivingInstructions ${drivingInstructions[i]}`,
                        currentRoombaLocation,
                        dirtCollectedPerStep,
                        wallHitByStep
                    });
                    // check max 
                } else {
                    // this mean we hit a wall so we dont add, all we do is add a point to wall hit 
                    wallHitByStep++;
                    // then we report the new stats
                    // console.log(` Step ${i + 2} |  Roomba location ${currentRoombaLocation}, | Action ${drivingInstructions[i]}, |  dirt collected so far ${dirtCollectedPerStep}, wall hits ${wallHitByStep}`);
                    results.push({
                        step: `Step ${i + 2}`,
                        drivingInstructions: `$ Current drivingInstructions ${drivingInstructions[i]}`,
                        currentRoombaLocation,
                        dirtCollectedPerStep,
                        wallHitByStep
                    });
                }

            }
            else if (drivingInstructions[i] === 'S') {

                // if it comes back as true then we may go south 
                if (coordinate.checkIfZero(currentRoombaLocation[1])) {
                    currentRoombaLocation[1] = currentRoombaLocation[1] - 1

                    dirtCollectedPerStep += checkForDirt(currentRoombaLocation, dirtLocation)
                    // console.log(`Step ${i + 2} |  Roomba location ${currentRoombaLocation}, | Action ${drivingInstructions[i]}, |  dirt collected so far ${dirtCollectedPerStep}, wall hits ${wallHitByStep}`);
                    // check max 
                    distanceTraveledPerStep = distanceTraveledPerStep + 1;
                    results.push({
                        step: `Step ${i + 2}`,
                        drivingInstructions: `$ Current drivingInstructions ${drivingInstructions[i]}`,
                        currentRoombaLocation,
                        dirtCollectedPerStep,
                        wallHitByStep
                    });
                } else {
                    // this mean we hit a wall so we dont add, all we do is add a point to wall hit 
                    wallHitByStep++;
                    // then we report the new stats
                    // console.log(`Step ${i + 2} |  Roomba location ${currentRoombaLocation}, | Action ${drivingInstructions[i]}, |  dirt collected so far ${dirtCollectedPerStep}, wall hits ${wallHitByStep}`);
                    results.push({
                        step: `Step ${i + 2}`,
                        drivingInstructions: `$ Current drivingInstructions ${drivingInstructions[i]}`,
                        currentRoombaLocation,
                        dirtCollectedPerStep,
                        wallHitByStep
                    });
                }

            }
            else if (drivingInstructions[i] === 'E') {

                if (coordinate.checkIfMaxX(currentRoombaLocation[0], roomDimension[0])) {
                    currentRoombaLocation[0] = currentRoombaLocation[0] + 1

                    dirtCollectedPerStep += checkForDirt(currentRoombaLocation, dirtLocation)
                    // console.log(`Step ${i + 2} |  Roomba location ${currentRoombaLocation}, | Action ${drivingInstructions[i]}, |  dirt collected so far ${dirtCollectedPerStep}, wall hits ${wallHitByStep}`);
                    // check max 
                    distanceTraveledPerStep = distanceTraveledPerStep + 1;

                    results.push({
                        step: `Step ${i + 2}`,
                        drivingInstructions: `$ Current drivingInstructions ${drivingInstructions[i]}`,
                        currentRoombaLocation,
                        dirtCollectedPerStep,
                        wallHitByStep
                    });
                } else {
                    // this mean we hit a wall so we dont add, all we do is add a point to wall hit 
                    wallHitByStep++;
                    // then we report the new stats
                    // console.log(`Step ${i + 2} |  Roomba location ${currentRoombaLocation}, | Action ${drivingInstructions[i]}, |  dirt collected so far ${dirtCollectedPerStep}, wall hits ${wallHitByStep}`);
                    results.push({
                        step: `Step ${i + 2}`,
                        drivingInstructions: `$ Current drivingInstructions ${drivingInstructions[i]}`,
                        currentRoombaLocation,
                        dirtCollectedPerStep,
                        wallHitByStep
                    });
                }

            }
            else if (drivingInstructions[i] === 'W') {

                // if it comes back as true then we may go south 
                if (coordinate.checkIfZero(currentRoombaLocation[0])) {
                    currentRoombaLocation[0] = currentRoombaLocation[0] - 1

                    dirtCollectedPerStep += checkForDirt(currentRoombaLocation, dirtLocation)
                    // console.log(`Step ${i + 2} |  Roomba location ${currentRoombaLocation}, | Action ${drivingInstructions[i]}, |  dirt collected so far ${dirtCollectedPerStep}, wall hits ${wallHitByStep}`);
                    // check max 
                    distanceTraveledPerStep = distanceTraveledPerStep + 1;
                    results.push({
                        step: `Step ${i + 2}`,
                        drivingInstructions: `$ Current drivingInstructions ${drivingInstructions[i]}`,
                        currentRoombaLocation,
                        dirtCollectedPerStep,
                        wallHitByStep
                    });
                } else {
                    // this mean we hit a wall so we dont add, all we do is add a point to wall hit 
                    wallHitByStep++;
                    // then we report the new stats
                    // console.log(`Step ${i + 2} | Roomba location ${currentRoombaLocation}, | Action ${drivingInstructions[i]}, |  dirt collected so far ${dirtCollectedPerStep}, wall hits ${wallHitByStep}`);
                    results.push({
                        step: `Step ${i + 2}`,
                        drivingInstructions: `$ Current drivingInstructions ${drivingInstructions[i]}`,
                        currentRoombaLocation,
                        dirtCollectedPerStep,
                        wallHitByStep
                    });
                }

            }
        }
    //     console.log(`
    // final location is ${currentRoombaLocation}
    // total dirt collected ${dirtCollectedPerStep}
    // total distance Traveled was ${distanceTraveledPerStep} steps, 
    // total wall hits ${wallHitByStep}
    // `);
    results.push({
        step: `final step is ${results.length}`,
        currentRoombaLocation: `final location is ${currentRoombaLocation}`,
        dirtCollectedPerStep: `total dirt collected ${dirtCollectedPerStep}`,
        wallHitByStep: `total wall hits ${wallHitByStep}`
    });
        return results; 
    }


    return (
        !submitted ? (
            <Container fluid>
                <Row>
                    <Col md={{ span: 9, offset: 2 }} className='mt-4' >
                        <Form onSubmit={formik.handleSubmit} >
                            <Form.Row>
                                <Col xs={12}>
                                    <Row>
                                        <Col xs={12}>
                                            <Form.Label>Room Dimensions </Form.Label>
                                        </Col>
                                        <Col xs={12}>
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
                                        <Col xs={12}>
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
                                        <Col xs={12}>
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
                                        <Col xs={12}>
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
                                        <Col xs={12} md={6} className='mt-4' >
                                            <Row>
                                                <Col xs={12} className='mt-4' >
                                                    <Form.Label>Driving Instructions</Form.Label>
                                                </Col>
                                                <Col xs={12} >
                                                    <DrivingCard
                                                        drivingInstructions={drivingInstructions}
                                                        clicked={clicked}
                                                    />
                                                </Col>
                                                <Col xs={6} className='mt-4' >
                                                    <Button block size="lg" onClick={north} >North</Button>
                                                </Col>
                                                <Col xs={6} className='mt-4' >
                                                    <Button block size="lg" onClick={south} >South</Button>
                                                </Col>
                                                <Col xs={6} className='mt-4' >
                                                    <Button block className='pr-4' size="lg" onClick={east} >East</Button>
                                                </Col>
                                                <Col xs={6} className='mt-4' >
                                                    <Button block size="lg" onClick={west} >West</Button>
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
                                        <Col xs={12} md={6} className='mt-4' >
                                            <Col xs={12} className='mt-4' >
                                                <Form.Label>Dirt Location </Form.Label>
                                            </Col>
                                            <Col xs={12} className='mt-4' >
                                                <Form.Text>x coordinate</Form.Text>
                                                <Form.Control
                                                    type="number"
                                                    name="xDirtLocation"
                                                    isInvalid={formik.errors.xDirtLocation}
                                                    {...formik.getFieldProps('xDirtLocation')} />
                                                <Form.Control.Feedback type="invalid">
                                                    {formik.errors.xDirtLocation}
                                                </Form.Control.Feedback>
                                            </Col>
                                            <Col xs={12} className='mt-4'>
                                                <Form.Text>y coordinate</Form.Text>
                                                <Form.Control
                                                    type="number"
                                                    name="yDirtLocation"
                                                    isInvalid={formik.errors.yDirtLocation}
                                                    {...formik.getFieldProps('yDirtLocation')} />
                                                <Form.Control.Feedback type="invalid">
                                                    {formik.errors.yDirtLocation}
                                                </Form.Control.Feedback>
                                            </Col>
                                        </Col>
                                        <Col xs={12} className='mt-4' >
                                            {
                                                drivingInstructions.length == 0 ? (
                                                    <Alert msg={'Fill out all field to submit'} color={'danger'} />
                                                ) : (
                                                        <Button size='lg' block variant="primary" type="submit">
                                                            Submit
                                                        </Button>
                                                    )

                                            }
                                            <Form.Control.Feedback type="isValid" >
                                                {
                                                    submitMsg ? <Alert msg={submitMsg} color={'primary'} /> : ''
                                                }
                                            </Form.Control.Feedback>
                                        </Col>
                                    </Row>
                                </Col>
                            </Form.Row>
                        </Form>

                    </Col>
                </Row >
            </Container >) :

            (
                <Container fluid>
                    <Row>
                        <Col md={{ span: 9, offset: 2 }} className='mt-4' >

                            <View data={output({
                                roomDimension,
                                roombaLocation,
                                dirtLocation,
                                drivingInstructions,
                                dirtCollected,
                                wallsHit,
                            })} />
                        </Col>
                    </Row >
                </Container >
            )

    );
}

export default Home;






