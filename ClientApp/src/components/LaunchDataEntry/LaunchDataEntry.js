import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { TextField } from '@material-ui/core';

import { getInitialValues } from './form';

const LaunchDataEntry = ({ onLaunch }) => (
  <Formik initialValues={getInitialValues()} onSubmit={() => onLaunch}>
    <React.Fragment>
      <TextField type="text" label="Rocket Mass" name="rocketMass"></TextField>
      <TextField type="text" label="Angle" name="Angle"></TextField>
      <TextField type="text" label="Force" name="Force"></TextField>
      <button type="button">Hello</button>
    </React.Fragment>
  </Formik>
);

LaunchDataEntry.propTypes = {
  setRocketMass: PropTypes.func.isRequired,
};

LaunchDataEntry.defaultProps = {};

export default LaunchDataEntry;
