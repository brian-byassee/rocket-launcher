//Created File
import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Field } from 'formik';
import { TextField, Button } from '@material-ui/core';

import { getInitialValues, validationSchema } from './form';

import './styles.css';

const LaunchDataEntry = ({ onLaunch, onReset }) => (
  <Formik initialValues={getInitialValues()} onSubmit={onLaunch} validationSchema={validationSchema}>
    {({ handleSubmit, errors, touched }) => (
      <form onSubmit={handleSubmit}>
        <div className="LaunchDataEntry">
          <Field id="mass" name="mass">
            {({ field }) => (
              <TextField
                {...field}
                label="Mass"
                helperText={touched.mass ? errors.mass : ''}
                error={errors.mass && Boolean(touched.mass)}
                autoComplete="off"
                variant="outlined"
              />
            )}
          </Field>
          <Field id="angle" name="angle">
            {({ field }) => (
              <TextField
                {...field}
                label="Angle"
                helperText={touched.angle ? errors.angle : ''}
                error={errors.angle && Boolean(touched.angle)}
                autoComplete="off"
                variant="outlined"
              />
            )}
          </Field>
          <Field id="force" name="force">
            {({ field }) => (
              <TextField
                {...field}
                label="Force"
                helperText={touched.force ? errors.force : ''}
                error={errors.force && Boolean(touched.force)}
                autoComplete="off"
                variant="outlined"
              />
            )}
          </Field>
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
