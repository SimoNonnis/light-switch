import React from 'react';
import { ReactComponent as CheckedIcon } from '../Icons/checked.svg';

const Selection = ({ selectionList, selectionId, setSelectionId }) => (
  <div className="content">
    <ul>
      {selectionList.map(s => (
        <li key={s.id} onClick={() => setSelectionId(s.id)}>
          {s.name} {s.id === selectionId && <CheckedIcon className="icon" />}
        </li>
      ))}
    </ul>
  </div>
);

export default Selection;
