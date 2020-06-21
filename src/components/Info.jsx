import React from 'react';
import Credits from './Credits';

import { ReactComponent as InfoIcon } from '../Icons/info.svg';

const Info = () => (
  <div>
    Info <Credits />
    <InfoIcon className="icon" />
  </div>
);

export default Info;
