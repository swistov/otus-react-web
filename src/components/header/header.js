import React, { Component } from 'react';
import './header.css';

export default class Header extends Component {
    render() {
        return (
            <div className="header d-flex">
                <h3>
                    <a href="#">
                        OTUS
                    </a>
                </h3>
                <ul className="d-flex">
                    <li>
                        <a href="#">Курсы</a>
                    </li>
                    <li>
                        <a href="#">О нас</a>
                    </li>
                    <li>
                        <a href="#">Личный кабинет</a>
                    </li>
                </ul>
            </div>
        );
    };
};