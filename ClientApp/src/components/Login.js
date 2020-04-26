import React from 'react';
import { CreateProfile } from './CreateProfile';

const axios = require('axios').default;

const Login = ({ setIsLoggedIn, setUser }) => {

  const handleSubmit = async values => {
    const { firstName, lastName } = values;
    console.log(values);
    const resp = await axios.post('login', values);
    setIsLoggedIn(false);
  };

  return (
    <CreateProfile setIsLoggedIn={setIsLoggedIn} setUser={setUser}/>
  );
};

export default Login;
