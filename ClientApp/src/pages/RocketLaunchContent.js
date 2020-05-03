//Created File
import React, { useState } from 'react';
import { Login } from '../components/Login';
import { LaunchDataEntry } from '../components/LaunchDataEntry';
import { LaunchAnimation } from '../components/LaunchAnimation';
import { LaunchHistoryTable } from '../components/LaunchHistoryTable';
const axios = require('axios').default;

const RocketLaunchContent = ({ user, setUser, isLoggedIn, setIsLoggedIn }) => {
  const [mass, setMass] = useState(0);
  const [angle, setAngle] = useState(0);
  const [force, setForce] = useState(0);
  const [launchSuccessful, setLaunchSuccessful] = useState(false);
  const [launchStatus, setLaunchStatus] = useState('grounded');

  const calculateSuccessFail = (mass, angle, force) => {
    const launchStatus = mass > 0 && angle > 0 && force > 0;
    setLaunchSuccessful(launchStatus);
    return launchStatus;
  };

  const onLaunch = async values => {
    const { mass, angle, force } = values;
    setMass(mass);
    setAngle(angle);
    setForce(force);
    var success = calculateSuccessFail(mass, angle, force);
    const resp = await axios.post('history', {
      email: user.email,
      mass: mass,
      angle: angle,
      force: force,
      success: success,
    });
    if (!resp.data) {
      alert('failed to save rocket launch data!');
    }
    setLaunchStatus('launched');
    console.log('Rocket has launched....');
  };

  const onReset = () => setLaunchStatus('grounded');

  return (
    <div className="RocketLaunchContent">
      {!isLoggedIn && <Login setIsLoggedIn={setIsLoggedIn} setUser={setUser} />}
      {isLoggedIn && (
        <div className="row">
          <div className="col-xs-9 col-md-7">
            <LaunchAnimation launchSuccessful={launchSuccessful} launchStatus={launchStatus} />
          </div>
          <div className="col-xs-3 col-md-5">
            <LaunchDataEntry onLaunch={onLaunch} onReset={onReset} />
            <LaunchHistoryTable className="launch-history-table" email={user.email}/>
          </div>
        </div>
      )}
    </div>
  );
};

export default RocketLaunchContent;
