import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Field } from 'formik';
import { TextField, Button } from '@material-ui/core';

import { getInitialValues } from './form';

import './styles.css';

const LaunchDataEntry = ({ onLaunch }) => (
  <Formik initialValues={getInitialValues()} onSubmit={onLaunch}>
    {({ handleSubmit }) => (
      <form onSubmit={handleSubmit}>
        <div className="LaunchDataEntry">
          <Field type="number" id="mass" name="mass" render={({ field }) => <TextField {...field} label="Mass" />} />
          <Field type="number" id="angle" name="angle" render={({ field }) => <TextField {...field} label="Angle" />} />
          <Field type="text" id="force" name="force" render={({ field }) => <TextField {...field} label="Force" />} />
          <Button className="submit-button" type="submit" color="primary">
            Launch
          </Button>
        </div>
      </form>
    )}
  </Formik>
);

LaunchDataEntry.propTypes = {
  onLaunch: PropTypes.func.isRequired,
};

LaunchDataEntry.defaultProps = {};

export default LaunchDataEntry;
