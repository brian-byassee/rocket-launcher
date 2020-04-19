import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const LaunchAnimation = ({ mass, angle, force }) => (
  <div className="LaunchAnimation">
    <div className="title">Launch Animation</div>
    <div>
      {mass}
      {angle}
      {force}
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
