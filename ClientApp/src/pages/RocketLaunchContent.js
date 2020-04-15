import React, { useState } from 'react';
import Login from '../components/Login';
import { LaunchDataEntry}  from '../components/LaunchDataEntry'

const RocketLaunchContent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div className="RocketLaunchContent">
      {!isLoggedIn && <Login />}
      {isLoggedIn && <LaunchDataEntry />}
    </div>

)};

export default RocketLaunchContent;