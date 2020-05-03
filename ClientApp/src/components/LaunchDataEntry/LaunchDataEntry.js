//Created File
import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Field } from 'formik';
import { TextField, Button } from '@material-ui/core';

import { getInitialValues } from './form';

import './styles.css';

const LaunchDataEntry = ({ onLaunch, onReset }) => (
  <Formik initialValues={getInitialValues()} onSubmit={onLaunch}>
    {({ handleSubmit }) => (
      <form onSubmit={handleSubmit}>
        <div className="LaunchDataEntry">
          <Field id="mass" name="mass" render={({ field }) => <TextField {...field} type="number" label="Mass" />} />
          <Field id="angle" name="angle" render={({ field }) => <TextField {...field} type="number" label="Angle" />} />
          <Field id="force" name="force" render={({ field }) => <TextField {...field} type="number" label="Force" />} />
          <Button className="submit-button" type="submit" color="primary">
            Launch
          </Button>
          <Button className="reset-button" type="button" onClick={onReset} color="primary">
            Reset
          </Button>
        </div>
      </form>
    )}
  </Formik>
);

LaunchDataEntry.propTypes = {
  onLaunch: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
};

LaunchDataEntry.defaultProps = {};

export default LaunchDataEntry;
