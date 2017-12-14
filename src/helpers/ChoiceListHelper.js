import React from 'react';

import Choice from '../components/Choice';

const ChoiceListHelper = {
  
  displayChoices: (choiceList) => (

    choiceList.map(
      c => <Choice key={c.id} name={c.name} vote={c.vote} />
    )
  ),

  addChoice: (choiceList, choiceName) => (
    
    [  
      ...choiceList, 
      { 
        name: choiceName,
        vote: 0,
        percentage: null
      }
    ]
  )
};

export default ChoiceListHelper;