import React from 'react';

import Choice from '../components/Choice';

const ChoiceListHelper = {
  
  displayChoices: (props) => (
    props.choices.map(
      c => <Choice key={c.id} {...c} editVote={props.editVote} />
    )
  ),

  addChoice: (choiceList, choiceName) => ([
    ...choiceList,
    {
      id: Math.floor((Math.random() * 1000) +1),
      name: choiceName,
      vote: "0",
      percentage: 0
    }
  ]),

  editVote: (choiceList, id, newVote) => (
    choiceList.map(
      choice => choice.id === id
        ? choice = {
          ...choice,
          vote: newVote === '' ? '0' : Math.trunc(newVote).toString()
        }
        : choice
    )
  )
};

export default ChoiceListHelper;