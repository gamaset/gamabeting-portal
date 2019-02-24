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

    // games = [
    //     {
    //         name: 'A x B',
    //         id: 123,
    //         bets: [
    //             {
    //                 value: "empate",
    //                 odd: "380",
    //                 type: "propabilidades"
    //             },
    //             {
    //                 value: "casa",
    //                 odd: "420",
    //                 type: "propabilidades"
    //             },
    //             {
    //                 value: "visitante",
    //                 odd: "2",
    //                 type: "propabilidades"
    //             }
    //         ]
    //     },
    //     {
    //         name: 'C x D',
    //         id: 456,
    //         bets: [
    //             {
    //                 value: "empate",
    //                 odd: "280",
    //                 type: "propabilidades"
    //             },
    //             {
    //                 value: "casa",
    //                 odd: "520",
    //                 type: "propabilidades"
    //             },
    //             {
    //                 value: "visitante",
    //                 odd: "49",
    //                 type: "propabilidades"
    //             }
    //         ]
    //     },
    //     {
    //         name: 'Y x Z',
    //         id: 789,
    //         bets: [
    //             {
    //                 value: "empate",
    //                 odd: "380",
    //                 type: "propabilidades"
    //             },
    //             {
    //                 value: "casa",
    //                 odd: "420",
    //                 type: "propabilidades"
    //             },
    //             {
    //                 value: "visitante",
    //                 odd: "2",
    //                 type: "propabilidades"
    //             }
    //         ]
    //     },
    //     {
    //         name: 'F x H',
    //         id: 111,
    //         bets: [
    //             {
    //                 value: "empate",
    //                 odd: "280",
    //                 type: "propabilidades"
    //             },
    //             {
    //                 value: "casa",
    //                 odd: "520",
    //                 type: "propabilidades"
    //             },
    //             {
    //                 value: "visitante",
    //                 odd: "49",
    //                 type: "propabilidades"
    //             }
    //         ]
    //     }
    // ]

    games = [
        {
          competition: {
            id: "55",
            name: "França - Ligue 1"
          },
          events: [
            {
              id: "29127100",
              name: "Dijon x St Etienne",
              timezone: "GMT",
              openDate: "2019-02-22T18:00:00.000+0000",
              competition: {
                id: "55",
                name: "França - Ligue 1"
              },
              markets: [
                {
                  marketId: "1.154895882",
                  marketName: "Probabilidades",
                  prices: [
                    {
                      odd: 3.35,
                      description: "Dijon"
                    },
                    {
                      odd: 2.26,
                      description: "St Etienne"
                    },
                    {
                      odd: 3.4,
                      description: "Empate"
                    }
                  ]
                }
              ]
            },
            {
              id: "29127100",
              name: "Dijon x St Etienne",
              timezone: "GMT",
              openDate: "2019-02-22T18:00:00.000+0000",
              competition: {
                id: "55",
                name: "França - Ligue 1"
              },
              markets: [
                {
                  marketId: "1.154895882",
                  marketName: "Probabilidades",
                  prices: [
                    {
                      odd: 3.35,
                      description: "Dijon"
                    },
                    {
                      odd: 2.26,
                      description: "St Etienne"
                    },
                    {
                      odd: 3.4,
                      "description": "Empate"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          competition: {
            id: "55",
            name: "França - Ligue 1"
          },
          events: [
            {
              id: "29127100",
              name: "Dijon x St Etienne",
              timezone: "GMT",
              openDate: "2019-02-22T18:00:00.000+0000",
              competition: {
                id: "55",
                name: "França - Ligue 1"
              },
              markets: [
                {
                  marketId: "1.154895882",
                  marketName: "Probabilidades",
                  prices: [
                    {
                      odd: 3.35,
                      description: "Dijon"
                    },
                    {
                      odd: 2.26,
                      description: "St Etienne"
                    },
                    {
                      odd: 3.4,
                      description: "Empate"
                    }
                  ]
                }
              ]
            },
            {
              id: "29127100",
              name: "Dijon x St Etienne",
              timezone: "GMT",
              openDate: "2019-02-22T18:00:00.000+0000",
              competition: {
                id: "55",
                name: "França - Ligue 1"
              },
              markets: [
                {
                  marketId: "1.154895882",
                  marketName: "Probabilidades",
                  prices: [
                    {
                      odd: 3.35,
                      description: "Dijon"
                    },
                    {
                      odd: 2.26,
                      description: "St Etienne"
                    },
                    {
                      odd: 3.4,
                      description: "Empate"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]

    render() {
        const { events } = this.props;

        return (
            <div>
                <ul>
                    { this.games.map(game => 
                    <div>
                        <p className="list__title"><span className="list__title--icon"><FontAwesomeIcon icon="futbol"/></span>{game.competition.name}</p>
                        <div>
                            {
                                this.games.map((event, i) => {

                                    return <li className="items" id={event.events[i].id}>
                                        <div className="teams">
                                            <FontAwesomeIcon icon="futbol"/>
                                            <div className="teams__info">
                                                <p className="teams--home">{event.events[i].name}</p>
                                            </div>
                                            <div className="game">
                                                <p className="game--date">{moment(event.events[i].openDate).format(`DD [de] MMMM`)}</p>
                                                <p className="game--hour">17:45</p>
                                            </div>
                                        </div>
                                        <div className="challenges">
                                            {
                                                game.events.map(bet => {
                                                    const gameInfo = {
                                                        name: bet.name,
                                                        gameId: bet.id,
                                                        // prices: {
                                                        //     description: bet.markets.prices.description,
                                                        //     odd: bet.markets.prices.odd
                                                        // }
                                                    }

                                                        return <div className="challenges__bet win--home" onClick={() => this.props.getBet(gameInfo)}>
                                                        <span className="team__title">{bet.markets.marketId}</span>
                                                        <span className="team__odd">{bet.markets.marketName}</span>
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
                    )
                    }
                </ul>
            </div>
        )
    }
}

export default GameList;