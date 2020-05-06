//Created File
import React from 'react';
import PropTypes from 'prop-types';
import { useSpring, animated } from 'react-spring';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";

const MAX_T = 4000; // total time of flight
const PADDING = 30; // page padding
const REVOLUTIONS = 2; // Number of times to orbit
const ICON_ROTATION_OFFSET = 44; // corrects for SVG Icon's inherit rotation

const RADIAL_REVOLUTION = 2 * Math.PI;
const RADIAN_TO_DEGREE_FACTOR = 180 / Math.PI;

const sin = t => Math.sin((t / MAX_T) * REVOLUTIONS * RADIAL_REVOLUTION);
const cos = t => Math.cos((t / MAX_T) * REVOLUTIONS * RADIAL_REVOLUTION);
const tan = t => Math.tan((t / MAX_T) * REVOLUTIONS * RADIAL_REVOLUTION);

const RocketLaunch = ({ width, height, launchSuccessful }) => {
  const xOffset = width / 2;
  const yOffset = height / 2;
  const maxAmplitude = Math.min(xOffset - PADDING, yOffset - PADDING);
  const destination = launchSuccessful ? Math.PI / 2 : Math.PI;
  const amplitude = t => maxAmplitude * Math.sin(t / MAX_T * destination);

  const { maxT } = useSpring({
    config: { duration: MAX_T },
    from: { maxT: 600 },
    maxT: MAX_T
  });

  const style = {
    left: maxT.interpolate(
      t => (amplitude(t) * sin(t) + xOffset) + "px"
    ),
    top: maxT.interpolate(
      t => (amplitude(t) * cos(t) + yOffset) + "px"
    ),
    transform: maxT.interpolate(t => {
      const quadrantOffset = cos(t) < 0 ? 180 : 0;
      const atanDegrees = -1 * Math.atan(tan(t)) * RADIAN_TO_DEGREE_FACTOR;
      return `rotate(${atanDegrees + quadrantOffset + ICON_ROTATION_OFFSET}deg)`;
    })
  };

  return (
    <animated.div style={style} className="launched-rocket">
      <FontAwesomeIcon icon={faRocket} />
    </animated.div>
  )
}

const Rocket = ({ width, height, launchSuccessful, launchStatus }) => {


  return (
    <div className="Rocket" >
      {launchStatus === 'grounded' && <div className="grounded-rocket"><FontAwesomeIcon icon={faRocket} /></div>}
      {
        launchStatus === 'launched' && (
          <RocketLaunch width={width} height={height} launchSuccessful={launchSuccessful} />
        )
      }
    </div >
  );
};

Rocket.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  launchSuccessful: PropTypes.bool.isRequired,
  launchStatus: PropTypes.string.isRequired,
}

export default Rocket;
