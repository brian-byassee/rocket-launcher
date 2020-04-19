import React from 'react';

const Login = () => {
  async getLogin => {
    const response = await fetch('login');
    const data = await response.json();
    this.setState({ forecasts: data, loading: false });
  };
  
  return (<div>Hello from login component</div>)

};

export default Login;
