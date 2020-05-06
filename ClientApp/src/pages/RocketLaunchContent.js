//Created File
import React, { useState } from 'react';
import useWindowSize from '../common/useWindowSize';
import Confetti from 'react-confetti'
import { Login } from '../components/Login';
import { LaunchDataEntry } from '../components/LaunchDataEntry';
import { LaunchAnimation } from '../components/LaunchAnimation';
import { LaunchHistoryTable } from '../components/LaunchHistoryTable';
const axios = require('axios').default;

const gravity = 9.8;
const airResistance = 5.4;
const beta = 0.6;
const exhaustGasSpeed = 500;
const t = 10;
const heightAlgorithm = (mass, force, angle) => {
  const C1 =
    (-1 * exhaustGasSpeed * beta * (beta - airResistance) - gravity * mass * airResistance) /
    (airResistance * (beta - airResistance) * Math.pow(mass, airResistance / beta));
  const C2 = ((gravity * Math.pow(mass, 2)) / (2 * beta * (beta - airResistance))) + (C1 * Math.pow(mass, 1 + (airResistance / beta))) / (beta * (1 + (airResistance / beta)));
  const firstPiece = ((exhaustGasSpeed * beta) / airResistance) * t;
  const secondPiece = (gravity / (2 * beta * (beta - airResistance))) * Math.pow(mass - beta * t, 2);
  const thirdPiece = (C1 / (beta * (1 + (airResistance / beta)))) * Math.pow(mass - (beta * t), 1 + (airResistance / beta))
  const burnout = firstPiece - secondPiece - thirdPiece + C2;

  console.log(burnout);
};

const RocketLaunchContent = ({ user, setUser, isLoggedIn, setIsLoggedIn }) => {
  const [mass, setMass] = useState(0);
  const [angle, setAngle] = useState(0);
  const [force, setForce] = useState(0);
  const [launchSuccessful, setLaunchSuccessful] = useState(false);
  const [launchStatus, setLaunchStatus] = useState('grounded');
  const [animating, setAnimating] = useState(false);

  const calculateSuccessFail = (mass, angle, force) => {
    heightAlgorithm(mass, force, angle);
    const launchStatus = mass > 0 && angle > 0 && force > 0;
    setLaunchSuccessful(launchStatus);
    return launchStatus;
  };

  const onLaunch = async values => {
    const { mass, angle, force } = values;
    setAnimating(true);
    setMass(mass);
    setAngle(angle);
    setForce(force);
    var success = calculateSuccessFail(mass, angle, force);
    const resp = await axios.post('history', {
      email: user.email,
      mass: Number(mass),
      angle: Number(angle),
      force: Number(force),
      success: success,
    });
    // setTimeout(() => setAnimating(false), 3000);
    if (!resp.data) {
      alert('failed to save rocket launch data!');
    }
    setLaunchStatus('launched');
  };

  const onReset = () => setLaunchStatus('grounded');

  const { width, height } = useWindowSize();

  return (
    <div className="RocketLaunchContent">
      {!isLoggedIn && <Login setIsLoggedIn={setIsLoggedIn} setUser={setUser} />}
      {isLoggedIn && (
        <div className="row">
          <div className="col-xs-9 col-md-7">
            {launchSuccessful && launchStatus === 'launched' && !animating && (
              <Confetti
                width={width}
                height={height} />
            )}
            <LaunchAnimation launchSuccessful={launchSuccessful} launchStatus={launchStatus} />
          </div>
          <div className="col-xs-3 col-md-5">
            <LaunchDataEntry onLaunch={onLaunch} onReset={onReset} />
            <LaunchHistoryTable className="launch-history-table" email={user.email} />
          </div>
        </div>
      )}
    </div>
  );
};

export default RocketLaunchContent;
