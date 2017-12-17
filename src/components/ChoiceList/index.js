import React from 'react';
import PropTypes from 'prop-types';

import ChoiceListHelper from '../../helpers/ChoiceListHelper';

const ChoiceList = (props) => (
  <ul>
    {ChoiceListHelper.displayChoices({...props})}
  </ul>
);

ChoiceList.propTypes = {
  choices: PropTypes.array.isRequired,
  editVote: PropTypes.func.isRequired
}

export default ChoiceList;