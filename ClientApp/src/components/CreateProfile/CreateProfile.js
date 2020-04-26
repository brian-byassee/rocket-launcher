import React from 'react';
import { Formik, Field } from 'formik';
import { Container } from 'reactstrap';
import { TextField, Button } from '@material-ui/core';

import './styles.css';

const axios = require('axios').default;

const CreateProfile = ({ setIsLoggedIn, setUser }) => {
  const handleSubmit = async values => {
    const resp = await axios.post('login', values);
    console.log(resp.data);
    setIsLoggedIn(resp.data);
    setUser(values);
  };

  return (
    <Container>
      <Formik
        initialValues={{ firstName: '', lastName: '', email: '', password: '', userName: '' }}
        onSubmit={handleSubmit}
      >
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className="thing">
              <Field id="firstName" name="firstName">
                {({ field }) => <TextField {...field} label="First Name" />}
              </Field>
              <Field id="lastName" name="lastName">
                {({ field }) => <TextField {...field} label="Last Name" />}
              </Field>
              <Field id="email" name="email">
                {({ field }) => <TextField {...field} label="Email" />}
              </Field>
              <Field id="userName" name="userName">
                {({ field }) => <TextField {...field} label="User Name" />}
              </Field>
              <Field id="password" name="password">
                {({ field }) => <TextField {...field} label="Password" />}
              </Field>
              <Button className="submit-button" type="submit" color="primary">
                Create Profile
              </Button>
            </div>
          </form>
        )}
      </Formik>
    </Container>
  );
};

export default CreateProfile;
