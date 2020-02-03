import React, { Component } from "react"
import TestChildForm from './TestChldForm'

class TestParent extends React.Component {

    constructor () {
        super();
        this.handleStateChange = this.handleStateChange.bind(this);
      }    

    state = {
      contacts: [
        {name: 'maria', email: 'maria@gmail.com', country: 'Brazil', city: 'Rio de Janiro',job: 'puta'},
        {name: 'jose', email: 'jose@gmail.com', country: 'Brazil', city: 'Sao Paulo',job: 'cafetao'},
      ]
    }

    handleStateChange(value){
//        event.preventDefault();
        let contacts = this.state.contacts;
        contacts.push(value);
        this.setState({ contacts : contacts })
    }
  
    render() {
      return (
          <React.Fragment>
          <h1>Contact Management</h1>
          <table border='1' width='100%' >
          <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Country</th>
              <th>City</th>
              <th>Job</th>     
          </tr>
  
          {this.state.contacts.map((contact) => (
          <tr>
              <td>{ contact.name }</td>
              <td>{ contact.email }</td>
              <td>{ contact.country }</td>
              <td>{ contact.city }</td>
              <td>{ contact.job }</td>
          </tr>
          ))}
          </table>
          <TestChildForm contacts={this.state.contacts} handleStateChange = {this.handleStateChange} />
          </React.Fragment>
      );
    }
  }

  export default TestParent