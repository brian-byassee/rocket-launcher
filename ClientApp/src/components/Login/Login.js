import React, { useState } from 'react';
import { Formik, Field } from 'formik';
import { Container, Button, Col, Row } from 'reactstrap';
import { TextField } from '@material-ui/core';

import './styles.css';

const axios = require('axios').default;

const Login = ({ setIsLoggedIn, setUser }) => {
  const [action, setAction] = useState({ type: 'login', switch: 'Create Account', submit: 'Sign In' });

  const handleSwitch = () => {
    setAction(
      action.type === 'login'
        ? { type: 'createAccount', switch: 'Cancel', submit: 'Sign Up' }
        : { type: 'login', switch: 'Create Account', submit: 'Sign In' }
    );
  };

  const handleSubmit = async values => {
    const resp =
      action.type === 'login'
        ? await axios.get('login', { params: { password: values.password, userName: values.userName } })
        : await axios.post('login', values);
    console.log(resp.data);
    setUser(resp.data);
    setIsLoggedIn(true);
  };

  return (
    <Formik
      initialValues={{ firstName: '', lastName: '', email: '', password: '', userName: '' }}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Row className="justify-content-md-center">
            <div className="input-fields">
              <Field id="userName" name="userName">
                {({ field }) => <TextField {...field} label="User Name" />}
              </Field>
              <Field id="password" name="password">
                {({ field }) => <TextField {...field} label="Password" />}
              </Field>
              {action.type === 'createAccount' && (
                <React.Fragment>
                  <Field id="passwordConfirm" name="passwordConfirm">
                    {({ field }) => <TextField {...field} label="Confirm Password" />}
                  </Field>
                  <div>
                    <Field id="firstName" name="firstName">
                      {({ field }) => <TextField {...field} label="First Name" />}
                    </Field>
                    <Field id="lastName" name="lastName">
                      {({ field }) => <TextField {...field} label="Last Name" />}
                    </Field>
                    <Field id="email" name="email">
                      {({ field }) => <TextField {...field} label="Email" />}
                    </Field>
                  </div>
                </React.Fragment>
              )}
              <Row className="button-row">
                <Col md="6">
                  <Button size="lg" color="secondary" onClick={handleSwitch} block>
                    {action.switch}
                  </Button>
                </Col>
                <Col md="6">
                  <Button size="lg" className="submit-button" type="submit" color="primary" block>
                    {action.submit}
                  </Button>
                </Col>
              </Row>
            </div>
          </Row>
        </form>
      )}
    </Formik>
  );
};

export default Login;
