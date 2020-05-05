//Created File
import React from 'react';
import PropTypes from 'prop-types';
import AutoSizer from "react-virtualized-auto-sizer";

import Rocket from './Rocket';


import './styles.css';

const LaunchAnimation = ({ launchSuccessful, launchStatus }) => (
  <div className="LaunchAnimation">
    <div className="animation-window">
      <AutoSizer>
        {({ width, height }) => {
          return <Rocket width={width} height={height} launchStatus={launchStatus} launchSuccessful={launchSuccessful} />
        }}
      </AutoSizer>
    </div>
  </div>
);

LaunchAnimation.propTypes = {
  launchSuccessful: PropTypes.bool.isRequired,
  launchStatus: PropTypes.string.isRequired,
};

LaunchAnimation.defaultProps = {};

export default LaunchAnimation;
