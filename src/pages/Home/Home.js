import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
// import { useDispatch, useSelector } from 'react-redux';
// import { addPost, submittedPostMsg } from '../actions';

function Home(props) {

    const [addedPost, setAddedPost] = useState('')

    // const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            xRoomDimension: 0,
            yRoomDimension: 0,
            xRoombaStarting: 0,
            yRoombaStarting: 0,
            userId: 0,
        },
        // dirty 
        validationSchema: Yup.object().shape({
            xRoomDimension: Yup.number().required('Required').min(0, 'x coordinate must be zero or greater'),
            yRoomDimension: Yup.number().required('Required').min(0, 'y coordinate must be zero or greater'),
            xRoombaStarting: Yup.number().required('Required').min(0, 'x Roomba coordinate must be zero or greater'),
            yRoombaStarting: Yup.number().required('Required').min(0, 'y Roomba coordinate must be zero or greater'),
            userId: Yup.number().moreThan(0, 'Must be greater than 0'),
        }),

        onSubmit: (values) => {
            console.log(values);
            //   dispatch(addStartingInfo({ ...values })); // here we will add the starting values for roomba 
            setAddedPost('your info has been submitted 😊, your result are available in the Results page!')
            setTimeout(function () {
                setAddedPost('')
            }, 2000);//run this thing in 2 seconds to clear the message 
        },


    });

    return (
        <Container fluid>
            <Row>
                <Col md={{ span: 9, offset: 3 }}>
                        <Form  onSubmit={formik.handleSubmit} >
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
                                            placeholder="Starting x dimension" 
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
                                            placeholder="Starting y dimension" 
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
                                            placeholder="Starting x dimension" 
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
                                            placeholder="Starting y dimension" 
                                            isInvalid={formik.errors.yRoombaStarting}
                                            {...formik.getFieldProps('yRoombaStarting')} />
                                            <Form.Control.Feedback type="invalid">
                                            {formik.errors.yRoombaStarting}
                                            </Form.Control.Feedback>
                                        </Col>

                                    </Row>
                                </Col>
                                <hr/>
                                
                            </Form.Row>

                            {/* <Button variant="primary" type="submit">
                                Submit
                            </Button> */}
                             <div>
                                {/* <label>User Id</label>
                    <input type="number" {...formik.getFieldProps('userId')} />
                    {formik.errors.userId} */}
                            </div>
                            {/* <button type="submit">Submit</button>
                <div> {addedPost ? addedPost : ''} </div> */}
                        </Form>
                </Col>
            </Row >
        </Container >

    );
}

export default Home;



