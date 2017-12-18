import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import CustomChart from './components/CustomChart';
import ChoiceList from "./components/ChoiceList";
import AddChoiceForm from "./components/AddChoiceForm";

import ChoiceListHelper from './helpers/ChoiceListHelper';

import { Choices } from './constants';

import './App.css';

class App extends Component {
  constructor() {
    super();

    const initialChoices = ChoiceListHelper.updatePercentage(Choices);

    this.state = {
      choices: initialChoices
    }
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <header className="App-header">
            <h1>Survey</h1>
            <h2>Quelle est votre langage de programmation favori ?</h2>
          </header>

          <div className="App-body">
            <AddChoiceForm addNewChoice={this.addChoice} />
            <ChoiceList choices={this.state.choices} editVote={this.editVote} />
          </div>

          <div className="App-body">
            <CustomChart choices={this.state.choices} />
          </div>        
        </div>

      </MuiThemeProvider>
    );
  }

  addChoice = (choiceName) => {    
    this.setState({choices: ChoiceListHelper.addChoice(this.state.choices, choiceName)});
  }

  editVote = (id, newVote) => {
    this.setState({choices: ChoiceListHelper.editVote(this.state.choices, id, newVote)});
  }
}

export default App;
