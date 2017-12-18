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
      const newId = Math.max.apply(
        Math,choiceList.map(
          (choice) => {return choice.id;}
        )
      ) +1;

      updatedList = [
        ...choiceList,
        {
          id: newId,
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
            value: newVote === '' || newVote < 0 ? 0 : Math.trunc(newVote)
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
        percent: parseFloat(((choice.value/totalVotes) *100 ).toFixed(2))
      }
    );
  
    return updatedList;
  }
};

export default ChoiceListHelper;