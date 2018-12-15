import React, { Component } from 'react';
import './DataTemplate.scss';

const DateTemplate = ({
  text,
  link,
  submissionDate,
  username,
  children
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

export default DateTemplate;