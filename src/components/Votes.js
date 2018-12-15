import React, { Component } from 'react';
import './Votes.scss';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(faCaretUp);
library.add(faCaretDown);

const Votes = ({
  votesCount,
  onIncreaseVotes,
  onDecreaseVotes
}) => {
  return (
    <div className="votes">
        <div className="votes__up"><FontAwesomeIcon icon="caret-up" onClick={onIncreaseVotes}/></div>
        <div className="votes__count">{votesCount}</div>
        <div className="votes__down"><FontAwesomeIcon icon="caret-down" onClick={onDecreaseVotes}/></div>
    </div>
  );
}

export default Votes;