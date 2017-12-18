import React, { Component } from 'react'

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import './AddChoiceForm.css';

export default class AddChoiceForm extends Component {
  
  constructor() {
    super();

    this.state = {
      newChoiceName: '',
      error: '',
      hint:''
    };
  }

  render() {
    return (
      <div>
        <span className="Form-Label">New Choice : </span>

        <TextField 
          className="Form-Input" 
          errorText={this.state.error} 
          hintText={this.state.hint} 
          hintStyle={{color:'#f00'}} 
          id={"1"} 
          type="text" 
          value={this.state.newChoiceName} 
          onChange={this.changeName} 
          required
        />

        <RaisedButton 
          className="AddButton" 
          primary={true} 
          label={"Add"} 
          onClick={this.addChoice} 
        />
      </div>
    )
  }

  changeName = (event) => {
    this.setState({newChoiceName: event.target.value.toUpperCase(), error:'', hint: ''});
  }

  addChoice = () => {
    this.state.newChoiceName === ''
      ? this.setState({error:' ', hint: 'This field is required'})
      : this.props.addNewChoice(this.state.newChoiceName);
    this.setState({newChoiceName: ''});
  }
}
