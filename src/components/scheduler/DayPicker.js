import React, { Component } from "react"
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import Grid from '@material-ui/core/Grid';

class DayPicker extends React.Component {
    
    constructor () {
        super();
        this.handleDaySubmit = this.handleDaySubmit.bind(this);
      }    

    state = {
        day: new Date('2020-01-23T21:11:54')
    }
    
    handleDaySubmit( date ) {
//        event.preventDefault();

        this.setState({ day: date })

        let formData = new FormData();
        formData.append('day', this.state.day)
        formData.append('slot', 'fake slot')
        formData.append('title', 'fake title')
        formData.append('email', 'fake email')
        formData.append('name', 'fake name')
  

        var agenda = {};
        formData.forEach(function(value, key){
            agenda[key] = value;
        });
        this.props.handleDayChange(agenda);

    }

    render(){
        return (

        <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container justify="space-around">
        <KeyboardDatePicker
        disableToolbar
        variant="inline"
        format="MM/dd/yyyy"
        margin="normal"
        id="date-picker-inline"
        label="Date picker inline"
        value={this.state.day}        
        onChange={this.handleDaySubmit}
        KeyboardButtonProps={{'aria-label': 'change date'}}
        />      
        </Grid>
        </MuiPickersUtilsProvider>
        )
    }
}
export default DayPicker