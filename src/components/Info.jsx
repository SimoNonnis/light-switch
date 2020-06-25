import React from 'react';
import { Link } from 'react-router-dom';
import Credits from './Credits';

import { ReactComponent as InfoIcon } from '../Icons/info.svg';

const Info = () => (
  <div className="content">
    <div className="content">
      <ul>
        <li className="infoItem">Заказчик: Покупатель Покупателевич</li>
        <li className="infoItem">Email: amserik@yandex.ru</li>
        <li className="infoItem">
          Адрес: 1155487, г Москва, ул Садовая Б., д 49
        </li>
        <li className="infoItem">Телефон: +7 906 266-55-63</li>
        <li className="infoItem">Исполнитель: Группа компаний</li>
        <li className="infoItem">Менеджер: Шроков Евгений</li>
        <li className="infoItem">Телефон: +7(499)123-35-01</li>
        <li className="infoItem">Монтаж: Да</li>
      </ul>
      <Credits />
    </div>

    <Link className="infoButton" to="/info">
      <InfoIcon className="icon icon--info" />
      Информация
    </Link>
  </div>
);

export default Info;
