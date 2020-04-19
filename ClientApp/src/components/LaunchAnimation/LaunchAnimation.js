import React from 'react';
import PropTypes from 'prop-types';
import { useSpring, animated } from 'react-spring';
import rocket from './rocket-solid.svg';

import './styles.css';

const LaunchAnimation = ({ mass, angle, force }) => (
  <div className="LaunchAnimation">
    <div className="title">Launch Animation</div>
    <div>
      <animated.div style={useSpring({ config: { duration: 5000 }, opacity: 1, from: { opacity: 0 } })}>
        <img className="rocket-icon" src={rocket} />
      </animated.div>
    </div>
  </div>
);

LaunchAnimation.propTypes = {
  mass: PropTypes.number.isRequired,
  angle: PropTypes.number.isRequired,
  force: PropTypes.number.isRequired,
};

LaunchAnimation.defaultProps = {};

export default LaunchAnimation;
