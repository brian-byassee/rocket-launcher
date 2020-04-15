import React from 'react';
import { Formik } from 'formik';
import { TextField } from '@material-ui/core'

const LaunchDataEntry = () => (
  <Formik>
    <React.Fragment>
      <TextField type="text" label="Rocket Mass" name="rocketMass"></TextField>
      <TextField type="text" label="Angle" name="Angle"></TextField>
      <TextField type="text" label="Force" name="Force"></TextField>
    </React.Fragment>
  </Formik>
)

export default LaunchDataEntry;
