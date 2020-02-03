import React, { Component } from "react"
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import DateFnsUtils from '@date-io/date-fns';
import Grid from '@material-ui/core/Grid';
import DayPicker from "./DayPicker"



const styles = theme => ({
  root: {
    width: '50%',
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
});

class Agenda extends React.Component {

    constructor () {
        super();
        this.handleDayChange = this.handleDayChange.bind(this);
      }    

    state = {
      schedule: [
        { id: 1, 
          day: '2020-01-01', 
          slot_id: 1,
          title:"appointment 01",
          description: " appointmnt 1 description",
          email: "user1email@google.com",
          name:"user1"
        },
        { id: 2, 
          day: '2020-01-02', 
          slot_id: 4,
          title:"appointment 02",
          description: " appointmnt 2 description",
          email: "use2email@google.com",
          name:"user2"
        },
      ], 
      activeStep: 0,
    }

   getSteps() {
      return ['Pick a Day', 'Grab a Slot', 'Submit the Appointment'];
    }

    handleDayChange(value){
        let schedule = this.state.schedule;
        schedule.push(value);
        this.setState({ schedule : schedule })
    }

    
    getStepContent(step) {
        switch (step) {
          case 0:
            return (
              <DayPicker handleDayChange = {this.handleDayChange}/>
            );
          case 1:
            return 'An ad group contains one or more ads which target a shared set of keywords.';
          case 2:
            return `Try out different ad text to see what brings in the most customers,
                    and learn how to enhance your ads using features like ad extensions.
                    If you run into any problems with your ads, find out how to tell if
                    they're running and how to resolve approval issues.`;
          default:
            return 'Unknown step';
        }
    }

    render() {

      const { classes } = this.props;

      return (

        <div className={classes.root}>
          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((label, index) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
                <StepContent>
                  <Typography>{this.getStepContent(index)}</Typography>
                  <div className={classes.actionsContainer}>
                    <div>
                      <Button
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        className={classes.button}
                      >
                        Back
                      </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handleNext}
                        className={classes.button}
                      >
                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                      </Button>
                    </div>
                  </div>
                </StepContent>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length && (
            <Paper square elevation={0} className={classes.resetContainer}>
              <Typography>All steps completed - you&apos;re finished</Typography>
              <Button onClick={handleReset} className={classes.button}>
                Reset
              </Button>
            </Paper>
          )}
      </div>
      )

    }
  }

  //export default Agenda
  export default withStyles(styles,{ withTheme: true })(Agenda);