import React, { Component } from "react"
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
// material-ui imports
import AppBar from '@material-ui/core/AppBar'
import Drawer from '@material-ui/core/Drawer'
import Dialog from '@material-ui/core/Dialog'
import Divider from '@material-ui/core/Divider'
import MenuItem from '@material-ui/core/MenuItem'
import Card from '@material-ui/core/Card'
import TextField from '@material-ui/core/TextField'
import SnackBar from '@material-ui/core/Snackbar'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import { makeStyles } from '@material-ui/core/styles'
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
  } from '@material-ui/pickers';

class Scheduler extends Component {
    render(){

        const{ auth } = this.props
        const { step } = this.props.agenda
        console.log("step", this.step)
        if(!auth.uid) return <Redirect to='/signIn' />

        switch (step) {
            case 1: 
                return (
                    <div className="sheduler container">
                    <div className="row">
                        <h2> dayPicker </h2>
                    </div>
                    </div> 
                )
            
            case 2: 
                return (
                    <div className="sheduler container">
                    <div className="row">
                        <h2> SlotPicker </h2>
                    </div>
                    </div> 
                )
            
        }
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        agenda: state.agenda,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps) //,
//    firestoreConnect([
//        { collection: 'projects'}
//    ])
)(Scheduler)