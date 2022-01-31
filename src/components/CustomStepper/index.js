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
    margin: '2% 5% 2%',
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
  const [state, setState] = useState({
    activeStep: 0,
    skipped: new Set()
  })

  const isStepOptional = (step) => {
    return step === 1
  }

  const handleNext = () => {
    const { activeStep } = state
    let { skipped } = state

    if (isStepSkipped(activeStep)) {
      skipped = new Set(skipped.values())
      skipped.delete(activeStep)
    }

    setState({
      activeStep: activeStep + 1,
      skipped
    })
  }

  const handleBack = () => {
    const { activeStep } = state

    setState({
      ...state,
      activeStep: activeStep - 1
    })
  }

   const handleReset = () => {
    setState({
      ...state,
      activeStep: 0
    })
  }

  const isStepSkipped = (step) => {
    return state.skipped.has(step)
  }

  const steps = Steps
  const { activeStep } = state

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => {
          const props = {}
          const labelProps = {}
          if (isStepOptional(index)) {
            labelProps.optional = <Typography variant="caption"></Typography>
          }
          if (isStepSkipped(index)) {
            props.completed = false
          }
          return (
            <Step key={label} {...props}>
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
        })}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
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
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
              <Button
                disabled={activeStep === 0}
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