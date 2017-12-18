import React from 'react';

import Choice from '../components/Choice';

const ChoiceListHelper = {
  
  displayChoices: (props) => (
    props.choices.map(
      c => <Choice key={c.id} {...c} editVote={props.editVote} />
    )
  ),

  addChoice: (choiceList, choiceName) => {   
    let updatedList = choiceList;

    const languageExists = choiceList.find(
      choice => choice.name === choiceName
    ) != null;

    if(languageExists) {
      alert("Ce langage est déjà dans la liste");
    }

    else {
      updatedList = [
        ...choiceList,
        {
          id: Math.floor((Math.random() * 1000) +1),
          name: choiceName,
          value: 0,
          percent: 0
        }
      ];
    }

    return updatedList;
  },

  editVote: (choiceList, id, newVote) => {
    const updatedList = ChoiceListHelper.updatePercentage(
      choiceList.map(
        choice => choice.id === id
          ? choice = {
            ...choice,
            value: newVote === '' ? 0 : Math.trunc(newVote)
          }
          : choice
      )
    )

    return updatedList;
  },

  updatePercentage: (choiceList) => {
    const totalVotes = Object.keys(choiceList).reduce(
      (subTotal, index) => (subTotal + choiceList[index].value)
      ,0
    );
    
    const updatedList = choiceList.map(
      choice => choice = {
        ...choice,
        percent: ((choice.value/totalVotes) *100 ).toFixed(2)
      }
    );
  
    return updatedList;
  }
};

export default ChoiceListHelper;