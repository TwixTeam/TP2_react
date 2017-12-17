import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ChoiceList from "./components/ChoiceList";
import AddChoiceForm from "./components/AddChoiceForm";

import ChoiceListHelper from './helpers/ChoiceListHelper';

import { choices } from './constants';

import './App.css';

class App extends Component {
  constructor() {
    
    super();

    this.state = {
      choices
    }
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <header className="App-header">
            <h1>Survey</h1>
            <h2>Quelle est votre langage de programmation favoris ?</h2>
          </header>
          <AddChoiceForm addNewChoice={this.addChoice} />

          <ChoiceList choices={this.state.choices} editVote={this.editVote} />
          {/* Add Custom components */}

        
        </div>
      </MuiThemeProvider>
    );
  }

  addChoice = (choiceName) => {    
    this.setState({choices: ChoiceListHelper.addChoice(this.state.choices, choiceName)});
  }

  editVote = (id, newVote) => {
    const test = ChoiceListHelper.editVote(this.state.choices, id, newVote);
    console.log(test)
    this.setState({choices: test});
  }
}

export default App;
