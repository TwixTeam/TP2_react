import React from 'react';

import ChoiceListHelper from '../../helpers/ChoiceListHelper';

const ChoiceList = (props) => (
  <ul>
    {ChoiceListHelper.displayChoices(props.choices)}
  </ul>
);

export default ChoiceList;