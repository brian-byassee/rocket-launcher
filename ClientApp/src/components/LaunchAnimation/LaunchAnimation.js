import React from 'react';
import PropTypes from 'prop-types';
import { useSpring, animated } from 'react-spring';

import './styles.css';

const LaunchAnimation = ({ mass, angle, force }) => (
  <div className="LaunchAnimation">
    <div className="title">Launch Animation</div>
    <div>
      <animated.div style={useSpring({ opacity: 1, from: { opacity: 0 } })}>I will fade in</animated.div>
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
