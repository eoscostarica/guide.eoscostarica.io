import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles';
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import useBaseUrl from '@docusaurus/useBaseUrl';

const useStyles = makeStyles(() => ({
  resetButton:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  root: {
    width: '90%'
  },
  buttonContainer: {
    direction: 'rtl',
    margin: '0% 4%',
  },
  button: {
    textTransform: 'none',
    color: '#7f7f7f',
    '&.MuiButton-containedPrimary': {
      color: '#fff',
      backgroundColor: '#3EBBD3',
      margin: '1%',
    }
  },
  instructions: {
    margin: '1% 5% 1%',
  },
  stepIconRoot: {
    color: 'rgb(192 192 192)',
    '&.MuiStepIcon-active': {
      color: '#3EBBD3'
    },
    '&.MuiStepIcon-completed': {
      color: '#82B982'
    }
  }
}));

const CustomStepper = ({ Content, Steps }) => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => { step === 1 };

  const isStepSkipped = (step) => { skipped.has(step) };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {Steps.map((label) => (
            <Step key={label}>
              <StepLabel
                StepIconProps={{
                  classes: {
                    root: classes.stepIconRoot,
                    active: classes.stepIconActive,
                    completed: classes.stepIconCompleted
                  }
                }}
              >
                {label}
              </StepLabel>
            </Step>
          )
        )}
      </Stepper>
      <div>
        {activeStep === Steps.length ? (
          <div className={classes.resetButton}>
            <Button onClick={handleReset} className={classes.button}>
              Reset
            </Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>
              {Content[activeStep].instruction}
            </Typography>
            <div className={classes.instructions}><img src={useBaseUrl(Content[activeStep].imageSrc)}/></div>
            <div className={classes.buttonContainer}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                href={Content[activeStep].href}
                className={classes.button}
              > 
                {activeStep === Steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
              <Button
                disabled={!activeStep}
                onClick={handleBack}
                className={classes.button}
              >
                Back
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default CustomStepper