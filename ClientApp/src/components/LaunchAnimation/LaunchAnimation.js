import React from 'react';
import PropTypes from 'prop-types';
import { useSpring, animated } from 'react-spring';
import AutoSizer from "react-virtualized-auto-sizer";

import Rocket from './Rocket';


import './styles.css';

const LaunchAnimation = ({ launchSuccessFail, launchStatus }) => (
  <div className="LaunchAnimation">
    <div className="animation-window">
      <AutoSizer>
        {({ width, height }) => {
          return <Rocket width={width} height={height} launchStatus={launchStatus} launchSuccessFail={launchSuccessFail} />
        }}
      </AutoSizer>
    </div>
  </div>
);

LaunchAnimation.propTypes = {
  launchSuccessFail: PropTypes.string.isRequired,
  launchStatus: PropTypes.string.isRequired,
};

LaunchAnimation.defaultProps = {};

export default LaunchAnimation;
