import React from 'react';

const Login = ({setIsLoggedIn}) => {
  const handleSubmit = async (event) => {
  	event.preventDefault();
    const resp = await fetch(`Login`);
    console.log(await resp);
    setIsLoggedIn(resp.data);
  }

  return (
    <form onSubmit={handleSubmit}>
    <button>Add card</button>
  </form>)

};

export default Login;
