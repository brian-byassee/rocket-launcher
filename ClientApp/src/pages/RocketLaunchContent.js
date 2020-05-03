//Created File
import React, { useState } from 'react';
import { Login } from '../components/Login';
import { LaunchDataEntry } from '../components/LaunchDataEntry';
import { LaunchAnimation } from '../components/LaunchAnimation';

const RocketLaunchContent = ({ user, setUser, isLoggedIn, setIsLoggedIn }) => {
  const [mass, setMass] = useState(0);
  const [angle, setAngle] = useState(0);
  const [force, setForce] = useState(0);
  const [launchSuccessFail, setLaunchSuccessFail] = useState();
  const [launchStatus, setLaunchStatus] = useState('grounded');

  const calculateSuccessFail = () => {
    const launchStatus = mass > 0 && angle > 0 && force > 0 ? 'success' : 'failure';
    setLaunchSuccessFail(launchStatus);
  }

  const onLaunch = (values) => {
    const { mass, angle, force } = values;
    setMass(mass);
    setAngle(angle);
    setForce(force);
    calculateSuccessFail();
    setLaunchStatus('launched');
    console.log('Rocket has launched....');
  };

  const onReset = () => setLaunchStatus('grounded');

  return (
    <div className="RocketLaunchContent">
      {!isLoggedIn && <Login setIsLoggedIn={setIsLoggedIn} setUser={setUser} />}
      {isLoggedIn && (
        <div className="row">
          <div className="col-xs-9 col-md-8">
            <LaunchAnimation launchSuccessFail={launchSuccessFail} launchStatus={launchStatus} />
          </div>
          <div className="col-xs-3 col-md-4">
            <LaunchDataEntry onLaunch={onLaunch} onReset={onReset} />
          </div>
        </div>
      )}
    </div>
  );
};

export default RocketLaunchContent;
