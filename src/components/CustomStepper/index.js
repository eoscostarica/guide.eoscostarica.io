import React, { useState } from 'react'
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

const CustomStepper = ({ Content }) => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
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
        {Content.map((step, index) => (
            <Step key={index}>
              <StepLabel
                StepIconProps={{
                  classes: {
                    root: classes.stepIconRoot,
                    active: classes.stepIconActive,
                    completed: classes.stepIconCompleted
                  }
                }}
              >
                { step.title && step.title }
              </StepLabel>
            </Step>
          )
        )}
      </Stepper>
      <div>
        {activeStep === Content.length ? (
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
                {activeStep === Content.length - 1 ? 'Finish' : 'Next'}
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