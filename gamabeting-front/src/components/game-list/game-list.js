import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';

import 'moment/locale/pt-br';

import './game-list.css';

type Props = {
    events: Array<any>,
    getBet: () => any
};

moment.locale('pt-br');

class GameList extends Component<Props> {

    constructor() {
        super();
        this.state = {
            value: ""
        };
      }

    async loadName(event) {
        this.setState(
        { 
            value: event.currentTarget.getAttribute('value'),
            odd: event.currentTarget.getAttribute('odd')
        });

        console.log('Value', event.currentTarget.getAttribute('value'));
        console.log('Odd', event.currentTarget.getAttribute('odd'));
    }

    games = [
        {
            name: 'A x B',
            id: 123,
            bets: [
                {
                    value: "empate",
                    odd: "380",
                    type: "propabilidades"
                },
                {
                    value: "casa",
                    odd: "420",
                    type: "propabilidades"
                },
                {
                    value: "visitante",
                    odd: "2",
                    type: "propabilidades"
                }
            ]
        },
        {
            name: 'C x D',
            id: 456,
            bets: [
                {
                    value: "empate",
                    odd: "280",
                    type: "propabilidades"
                },
                {
                    value: "casa",
                    odd: "520",
                    type: "propabilidades"
                },
                {
                    value: "visitante",
                    odd: "49",
                    type: "propabilidades"
                }
            ]
        },
        {
            name: 'Y x Z',
            id: 789,
            bets: [
                {
                    value: "empate",
                    odd: "380",
                    type: "propabilidades"
                },
                {
                    value: "casa",
                    odd: "420",
                    type: "propabilidades"
                },
                {
                    value: "visitante",
                    odd: "2",
                    type: "propabilidades"
                }
            ]
        },
        {
            name: 'F x H',
            id: 111,
            bets: [
                {
                    value: "empate",
                    odd: "280",
                    type: "propabilidades"
                },
                {
                    value: "casa",
                    odd: "520",
                    type: "propabilidades"
                },
                {
                    value: "visitante",
                    odd: "49",
                    type: "propabilidades"
                }
            ]
        }
    ]

    render() {
        const { events } = this.props;

        return (
            <div>
                <ul>
                    <div>
                        <p className="list__title"><span className="list__title--icon"><FontAwesomeIcon icon="futbol"/></span>Teste</p>
                        <div>
                            {
                                this.games.map(game => {

                                    return <li className="items" id={game.id}>
                                        <div className="teams">
                                            <FontAwesomeIcon icon="futbol"/>
                                            <div className="teams__info">
                                                <p className="teams--home">{game.name}</p>
                                            </div>
                                            <div className="game">
                                                <p className="game--date">20 de fevereiro</p>
                                                <p className="game--hour">17:45</p>
                                            </div>
                                        </div>
                                        <div className="challenges">
                                            {
                                                game.bets.map(bet => {
                                                    const gameInfo = {
                                                        name: game.name,
                                                        gameId: game.id,
                                                        bet: {
                                                            value: bet.value,
                                                            odd: bet.odd,
                                                            type: bet.type
                                                        }
                                                    }

                                                        return <div className="challenges__bet win--home" onClick={() => this.props.getBet(gameInfo)}>
                                                        <span className="team__title">{bet.value}</span>
                                                        <span className="team__odd">{bet.odd}</span>
                                                    </div>
                                                })
                                            }
                                        </div>
                                        <div className="detail">
                                            <Link to="#">(119)<FontAwesomeIcon icon="arrow-alt-circle-right" size="2x"/></Link>
                                        </div>
                                    </li>
                                })
                            }
                        </div>
                    </div>
                </ul>
            </div>
        )
    }
}

export default GameList;