import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';

import 'moment/locale/pt-br';

import './event-list.css';

type Props = {
    events: Array<any>,
    getBet: () => any
};

moment.locale('pt-br');

class GameList extends Component<Props> {

    constructor() {
        super();
        this.state = {
            value: "",
            toggle: false
        };
      }

    async loadName(event) {
        this.setState(
        { 
            value: event.currentTarget.getAttribute('value'),
            odd: event.currentTarget.getAttribute('odd')
        });
    }

    render() {
        const { events } = this.props;

        return (
            <React.Fragment>
                <div className="list">
                    { events && events.events[0].markets.map((market, i) => 
                    <div className="list__container" id={i} key={i}>
                        <div className={this.state.toggle ? `list__title ${this.state.toggle}` : "list__title"}><span className="list__title--icon"><FontAwesomeIcon icon="futbol"/></span>{market.marketName}</div>
                        <div className="list__content">
                        <div className="items" id={market.marketId} key={i}>
                            <div className="challenges"> {
                                market.prices.map((price, priceIndex) => {
                                    const gameInfo = function(selectionName, odd){
                                        return { 
                                             eventName: events.events[0].name,
                                             eventId: events.events[0].id,
                                             eventDate: events.events[0].openDate,
                                             // competition: {
                                             //   id: game.competition.id,
                                             //   description: game.competition.name
                                             // },
                                             market: {
                                               marketId: market.marketId,
                                               marketName: market.marketName,
                                               price: {
                                                 selectionId: price.selectionId,
                                                 selectionName: selectionName,
                                                 odd: odd
                                                 }
                                             }
                                         }
                                     }
                                     return <div className="challenges__bet" key={priceIndex} onClick={() => this.props.getBet(gameInfo(price.selectionName, price.odd))}>
                                                <span className="team__title">{price.selectionName}</span>
                                                <span className="team__odd">{price.odd}</span>
                                            </div>
                                })
                            }
                            </div>
                            </div>
                        </div>
                        </div>
                    )
                    }
                </div>
            </React.Fragment>
        )
    }
}

export default GameList;