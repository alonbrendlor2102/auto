import React, { Component } from 'react';
import './AutodditLink.scss';

const AutodditLink = ({
  id,  
  title,
  link,
  imageUrl,
  submissionDate,
  username,
  comments,
  votesCount
  
}) => {
  return (
    <div className="data-template">
        {link && <a href={link} className="data-template__link">{text}</a>}
        {!link && <div className="data-template__text">{text}</div>}
        <div className="data-template__date">Submitted on {submissionDate} by <span>{username}</span></div>
        {children}
    </div>
  );
}

export default AutodditLink;