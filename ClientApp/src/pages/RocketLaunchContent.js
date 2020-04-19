import React, { useState } from 'react';
import Login from '../components/Login';
import { LaunchDataEntry } from '../components/LaunchDataEntry';
import { LaunchAnimation } from '../components/LaunchAnimation';

const RocketLaunchContent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [mass, setMass] = useState(0);
  const [angle, setAngle] = useState(0);
  const [force, setForce] = useState(0);

  const onLaunch = (values) => {
    const { mass, angle, force } = values;
    setMass(mass);
    setAngle(angle);
    setForce(force);
    console.log('Rocket has launched....');
  };

  return (
    <div className="RocketLaunchContent">
      {!isLoggedIn && <Login setIsLoggedIn={setIsLoggedIn} />}
      {isLoggedIn && (
        <div className="row">
          <div className="col-xs-9 col-md-8">
            <LaunchAnimation mass={mass} angle={angle} force={force} />
          </div>
          <div className="col-xs-3 col-md-4">
            <LaunchDataEntry onLaunch={onLaunch} />
          </div>{' '}
        </div>
      )}
    </div>
  );
};

export default RocketLaunchContent;
