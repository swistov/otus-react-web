import React, { Component } from 'react';
import './random-curse.css';

export default class RandomCurse extends Component {
    render() {
        return (
            <div className={'random-curse'}>
                <img className={'curse-image'}
                     src={'https://im0-tub-ru.yandex.net/i?id=a2deda5a09e4081670a5e38dc238cfe2&n=13&exp=1'} />
                <div>
                    <h4>Web програмирование</h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="term">Дата старта:</span>
                            <span>28.11.2019</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Длительность:</span>
                            <span>120 ч.</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Стоимость:</span>
                            <span>10 000</span>
                        </li>
                    </ul>
                </div>
            </div>
        );
    };
};