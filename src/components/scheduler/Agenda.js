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
import SlotTable from "./SlotTable"



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
        this.handleSlotChange = this.handleSlotChange.bind(this);
        this.handleBack = this.handleBack.bind(this);
        this.handleNext = this.handleNext.bind(this);
        this.handleReset = this.handleReset.bind(this);
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

      slots: [
        {slotTime:'9:00h - 10:00h', slot:'slot1'},
        {slotTime:'10:00h - 11:00h', slot:'slot2'},
        {slotTime:'11:00h - 12:00h', slot:'slot3'},
        {slotTime:'13:00h - 14:00h', slot:'slot4'},
        {slotTime:'14:00h - 15:00h', slot:'slot5'},
        {slotTime:'15:00h - 16:00h', slot:'slot6'},
        {slotTime:'16:00h - 17:00h', slot:'slot7'},
        {slotTime:'17:00h - 18:00h', slot:'slot8'},
      ],
      selectedSlot:0,
      activeStep: 0,
      id:100,

    }

   getSteps() {
      return ['Pick a Day', 'Grab a Slot', 'Submit the Appointment'];
    }

    handleDayChange(value){
        let schedule = this.state.schedule;
        schedule.push(value);
        this.setState({ schedule : schedule })
    }

    handleSlotChange(value){
    // to be filled
  }
  
    handleBack(){
        let activeStep = this.state.activeStep
        // If the current step is 1, 2 or 3, then subtract one on "previous" button click
        activeStep = activeStep <= 0? 0: activeStep - 1
        this.setState({
          activeStep: activeStep
        })
    }

    handleNext(){
      let activeStep = this.state.activeStep
      // If the current step is 0, 1 or 2, then add one on "next" button click
      activeStep = activeStep >= 2? 3: activeStep + 1
      this.setState({
        activeStep: activeStep
      })
    }

    handleReset(){
      this.setState({
        activeStep: 0
      })
    }

    
    getStepContent(step) {
        switch (step) {
          case 0:
            return (
              <DayPicker handleDayChange = {this.handleDayChange}/>
            );
          case 1:
            return(
              <SlotTable slotInfo = {this.state} handleSlotChange = {this.handleSlotChange}/>
            );
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
      const steps = this.getSteps();
      const activeStep = this.state.activeStep;

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
                        onClick={this.handleBack}
                        className={classes.button}
                      >
                        Back
                      </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={this.handleNext}
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
              <Button onClick={this.handleReset} className={classes.button}>
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