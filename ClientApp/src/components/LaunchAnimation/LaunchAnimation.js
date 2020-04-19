import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const LaunchAnimation = () => <div className="LaunchAnimation">Launch Animation</div>;

LaunchAnimation.propTypes = {
  rocketMass: PropTypes.number.isRequired,
  angle: PropTypes.number.isRequired,
  force: PropTypes.number.isRequired,
};

LaunchAnimation.defaultProps = {};

export default LaunchAnimation;
