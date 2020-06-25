import React from 'react';
import { Link } from 'react-router-dom';
import Credits from './Credits';

import { ReactComponent as InfoIcon } from '../Icons/info.svg';

const Info = () => (
  <div className="content">
    <div className="content">
      <Credits />
    </div>

    <Link className="infoButton" to="/info">
      <InfoIcon className="icon icon--info" />
      Информация
    </Link>
  </div>
);

export default Info;
