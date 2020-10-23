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
            friends: ['jared', 'ian'],
        },
        // dirty 
        validationSchema: Yup.object().shape({
            xRoomDimension: Yup.number().required('Required').min(0, 'x coordinate must be zero or greater'),
            yRoomDimension: Yup.number().required('Required').min(0, 'y coordinate must be zero or greater'),
            xRoombaStarting: Yup.number().required('Required').min(0, 'x Roomba coordinate must be zero or greater'),
            yRoombaStarting: Yup.number().required('Required').min(0, 'y Roomba coordinate must be zero or greater'),
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
                                        <Button variant="primary" type="submit">
                                            Submit
                                        </Button>
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



// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Formik, Field, Form, ErrorMessage, FieldArray } from 'formik';

// const initialValues = {
//   friends: [
//     {
//       name: '',
//       email: '',
//     },
//   ],
// };

// const InviteFriends = () => (
//   <div>
//     <h1>Invite friends</h1>
//     <Formik
//       initialValues={initialValues}
//       onSubmit={async (values) => {
//         await new Promise((r) => setTimeout(r, 500));
//         alert(JSON.stringify(values, null, 2));
//       }}
//     >
//       {({ values }) => (
//         <Form>
//           <FieldArray name="friends">
//             {({ insert, remove, push }) => (
//               <div>
//                 {values.friends.length > 0 &&
//                   values.friends.map((friend, index) => (
//                     <div className="row" key={index}>
//                       <div className="col">
//                         <label htmlFor={`friends.${index}.name`}>Name</label>
//                         <Field
//                           name={`friends.${index}.name`}
//                           placeholder="Jane Doe"
//                           type="text"
//                         />
//                         <ErrorMessage
//                           name={`friends.${index}.name`}
//                           component="div"
//                           className="field-error"
//                         />
//                       </div>
//                       <div className="col">
//                         <label htmlFor={`friends.${index}.email`}>Email</label>
//                         <Field
//                           name={`friends.${index}.email`}
//                           placeholder="jane@acme.com"
//                           type="email"
//                         />
//                         <ErrorMessage
//                           name={`friends.${index}.name`}
//                           component="div"
//                           className="field-error"
//                         />
//                       </div>
//                       <div className="col">
//                         <button
//                           type="button"
//                           className="secondary"
//                           onClick={() => remove(index)}
//                         >
//                           X
//                         </button>
//                       </div>
//                     </div>
//                   ))}
//                 <button
//                   type="button"
//                   className="secondary"
//                   onClick={() => push({ name: '', email: '' })}
//                 >
//                   Add Friend
//                 </button>
//               </div>
//             )}
//           </FieldArray>
//           <button type="submit">Invite</button>
//         </Form>
//       )}
//     </Formik>
//   </div>
// );

// ReactDOM.render(<InviteFriends />, document.getElementById('root'));
