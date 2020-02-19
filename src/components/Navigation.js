import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = ({ to, name, componentClassNames }) => {
  return (
    <div className={componentClassNames}>
      <h4><Link to={ to }>{ name }</Link></h4>
    </div>
  );
};

export default Navigation;
