import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ChoiceList from "./components/ChoiceList";
import AddChoiceForm from "./components/AddChoiceForm";

import './App.css';

class App extends Component {
  constructor() {
    
    super();

    this.state = {
      choices: [
        {id: 1, name: "JAVA", vote: 10, percentage: null},
        {id: 2, name: "C#", vote: 17, percentage: null},
        {id: 3, name: "C++", vote: 20, percentage: null}
      ]
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

          <ChoiceList choices={this.state.choices} />
          {/* Add Custom components */}

        
        </div>
      </MuiThemeProvider>
    );
  }

  addChoice = (choiceName) => {
    const newChoiceList = [
      ...this.state.choices,
      {
        id: Math.floor((Math.random() * 1000) +1),
        name: choiceName,
        vote: 0,
        percentage:null
      }
    ];

    console.log(newChoiceList);

    this.setState({choices: newChoiceList});
      
  }
}

export default App;
