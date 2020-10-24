import React from 'react';
import { Formik, Field, Form, ErrorMessage, FieldArray } from 'formik';

// starting code for dirt location arrangement 
const initialValues = {
  friends: [
    {
      x: '',
      y: '',
    },
  ],
};

const FormComponent = () => (
  <div>
    <h1>dirt locations</h1>
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        alert(JSON.stringify(values,null,3))
      }}
    >
      {({ values }) => (
        <Form>
          <FieldArray name="friends">
            {({ insert, remove, push }) => (
              <div>
                {values.friends.length > 0 &&
                  values.friends.map((friend, index) => (
                    <div className="row" key={index}>
                      <div className="col">
                        <label htmlFor={`friends.${index}.x`}> x </label>
                        <Field
                          name={`friends.${index}.x`}
                          placeholder="Jane Doe"
                          type="text"
                        />
                      </div>
                      <div className="col">
                        <label htmlFor={`friends.${index}.y`}> y</label>
                        <Field
                          name={`friends.${index}.y`}
                          placeholder="jane@acme.com"
                          type="text"
                        />
                      </div>
                      <div className="col">
                        <button
                          type="button"
                          className="secondary"
                          onClick={() => remove(index)}
                        >
                          X
                        </button>
                      </div>
                    </div>
                  ))}
                <button
                  type="button"
                  className="secondary"
                  onClick={() => push({ x: '', y: '' })}
                >
                  Add Friend
                </button>
              </div>
            )}
          </FieldArray>
          <button type="submit">Invite</button>
        </Form>
      )}
    </Formik>
  </div>
);

export default FormComponent; 
