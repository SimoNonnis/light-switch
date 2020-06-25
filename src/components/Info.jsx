import React from 'react';
import { Link } from 'react-router-dom';
import Credits from './Credits';

import { ReactComponent as InfoIcon } from '../Icons/info.svg';

const Info = () => (
  <div>
    Info <Credits />
    <div>
      <Link to="/info">
        <InfoIcon className="icon" />
      </Link>
    </div>
  </div>
);

export default Info;
