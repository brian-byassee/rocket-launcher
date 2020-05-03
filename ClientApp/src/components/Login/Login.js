//Created File
import React, { useState } from 'react';
import { Formik, Field } from 'formik';
import { Button, Col, Row } from 'reactstrap';
import { TextField } from '@material-ui/core';
import * as Yup from 'yup';

import './styles.css';

const axios = require('axios').default;
var debounce = require('lodash.debounce');
//Object used to validate user input for login/create account page
const loginValidation = Yup.object().shape({
  createAccount: Yup.bool(),
  password: Yup.string()
    .max(20, 'Max 20 characters')
    .min(5, 'Minimum 5 character')
    .required('Required'),
  userName: Yup.string().when('createAccount', {
    is: true,
    then: Yup.string()
      .max(20, 'Max 20 characters')
      .required('User Name is required'),
  }),
  passwordConfirm: Yup.string().when('createAccount', {
    is: true,
    then: Yup.string()
      .required('Required')
      .oneOf([Yup.ref('password')], 'Password does not match'),
  }),
  firstName: Yup.string().when('createAccount', {
    is: true,
    then: Yup.string()
      .max(20, 'Max 20 characters')
      .required('Required'),
  }),
  lastName: Yup.string().when('createAccount', {
    is: true,
    then: Yup.string()
      .max(20, 'Max 20 characters')
      .required('Required'),
  }),
  email: Yup.string().when('createAccount', {
    is: true,
    then: Yup.string()
      .email('Enter a valid email')
      .required('Email is required')
      .test(
        'check-email',
        'Email already taken',
        debounce(async value => !(await axios.get(`login/${value}`)).data, 400)
      ),
    otherwise: Yup.string()
      .email('Enter a valid email')
      .required('Email is required'),
  }),
});

//function used to render Login content
const Login = ({ setIsLoggedIn, setUser }) => {
  const [createAccount, setCreateAccount] = useState({ isNew: false, switch: 'Create Account', submit: 'Sign In' });

  const handleSwitch = setFieldValue => {
    setFieldValue('createAccount', !createAccount.isNew);
    setCreateAccount(
      createAccount.isNew
        ? { isNew: false, switch: 'Create Account', submit: 'Sign In' }
        : { isNew: true, switch: 'Cancel', submit: 'Sign Up' }
    );
  };

  const handleSubmit = async values => {
    const resp = createAccount.isNew
      ? await axios.post('login', values)
      : await axios.get('login', { params: { password: values.password, email: values.email } });
    if (!resp.data) {
      alert('Invalid user name or password');
    } else {
      setUser(resp.data);
      setIsLoggedIn(true);
    }
  };

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        passwordConfirm: '',
        userName: '',
        createAccount: createAccount.isNew,
      }}
      onSubmit={handleSubmit}
      validationSchema={loginValidation}
    >
      {({ handleSubmit, errors, touched, setFieldValue }) => (
        <form onSubmit={handleSubmit}>
          <Row className="justify-content-md-center">
            <div className="input-fields">
              <Field id="email" name="email">
                {({ field }) => (
                  <TextField
                    {...field}
                    label="Email"
                    helperText={touched.email ? errors.email : ''}
                    error={errors.email && Boolean(touched.email)}
                    variant="outlined"
                  />
                )}
              </Field>
              <Field id="password" name="password">
                {({ field }) => (
                  <TextField
                    {...field}
                    label="Password"
                    type="password"
                    helperText={touched.password ? errors.password : ''}
                    error={errors.password && Boolean(touched.password)}
                    variant="outlined"
                  />
                )}
              </Field>
              {createAccount.isNew && (
                <React.Fragment>
                  <Field id="passwordConfirm" name="passwordConfirm">
                    {({ field }) => (
                      <TextField
                        {...field}
                        label="Confirm Password"
                        type="password"
                        helperText={touched.passwordConfirm ? errors.passwordConfirm : ''}
                        error={errors.passwordConfirm && Boolean(touched.passwordConfirm)}
                        variant="outlined"
                      />
                    )}
                  </Field>
                  <Field id="firstName" name="firstName">
                    {({ field }) => (
                      <TextField
                        {...field}
                        label="First Name"
                        helperText={touched.firstName ? errors.firstName : ''}
                        error={errors.firstName && Boolean(touched.firstName)}
                        variant="outlined"
                      />
                    )}
                  </Field>
                  <Field id="lastName" name="lastName">
                    {({ field }) => (
                      <TextField
                        {...field}
                        label="Last Name"
                        helperText={touched.lastName ? errors.lastName : ''}
                        error={errors.lastName && Boolean(touched.lastName)}
                        variant="outlined"
                      />
                    )}
                  </Field>
                  <Field id="userName" name="userName">
                    {({ field }) => (
                      <TextField
                        {...field}
                        helperText={touched.userName ? errors.userName : ''}
                        error={errors.userName && Boolean(touched.userName)}
                        variant="outlined"
                        label="User Name"
                      />
                    )}
                  </Field>
                </React.Fragment>
              )}
              <Row className="button-row">
                <Col md="6">
                  <Button size="lg" color="secondary" onClick={() => handleSwitch(setFieldValue)} block>
                    {createAccount.switch}
                  </Button>
                </Col>
                <Col md="6">
                  <Button size="lg" className="submit-button" type="submit" color="primary" block>
                    {createAccount.submit}
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
