import React from 'react';
import { Link } from 'react-router-dom';

const sideBar = ({ slim }) => {
    let classNames = require('classnames');
    return (
        <div className={classNames('leftSideBar', slim ? 'slim' : 'large')}>
            <nav>
                <ul>
                    <li className="logo">
                        <Link to="/">{slim ? 'TW' : 'TripleWeb'}</Link>
                    </li>
                    <li>
                        <Link to="/things">
                            <div className="icon iconThings"></div>
                            <span>Вещи</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="#">
                            <div className="icon iconTempThings"></div>
                            <span>Шаблоны вещей</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="#">
                            <div className="icon iconShapeThings"></div>
                            <span>Форма вещей</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/constructor">
                            <div className="icon iconInterface"></div>
                            <span>Интерфейсы</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="#">
                            <div className="icon iconControlCenter"></div>
                            <span>Центр управления</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="#">
                            <div className="icon iconUsers"></div>
                            <span>Пользователи</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="#">
                            <div className="icon iconSetting"></div>
                            <span>Настройки</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default sideBar;
