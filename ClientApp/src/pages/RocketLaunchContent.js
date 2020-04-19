import React, { useState } from 'react';
import Login from '../components/Login';
import { LaunchDataEntry } from '../components/LaunchDataEntry';
import { LaunchAnimation } from '../components/LaunchAnimation';

const RocketLaunchContent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [rocketMass, setRocketMass] = useState(0);
  const [angle, setAngle] = useState(0);
  const [force, setForce] = useState(0);

  return (
    <div className="RocketLaunchContent">
      {!isLoggedIn && <Login setIsLoggedIn={setIsLoggedIn} />}
      {isLoggedIn && (
        <div className="row">
          <div className="col-xs-9 col-md-8">
            <LaunchAnimation rocketMass={rocketMass} angle={angle} force={force} />
          </div>
          <div className="col-xs-3 col-md-4">
            <LaunchDataEntry setRocketMass={setRocketMass} setAngle={setAngle} setForce={setForce} />
          </div>{' '}
        </div>
      )}
    </div>
  );
};

export default RocketLaunchContent;
