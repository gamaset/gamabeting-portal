import React, { Component } from 'react';
import { getEvents } from '../../services/games';

import GameList from '../../components/game-list/game-list';
import Ticket from '../../components/ticket/ticket';

type State = {
    events?: Array<any>,
    bet?: Array<any>
}

class Dashboard extends Component <State> {

    constructor() {
        super();
        this.state = {
            betList: JSON.parse(localStorage.getItem('bets')) || []
        };
    }

    async loadEvents() {
        this.setState({ events: null });
        const events = await getEvents();
        
        this.setState({ events });
    }

    async setBetToList(events: any) {
        let betPos = null;
        const newList = this.state.betList.map((betItem, betItemIndex) => {
            if(betItem.eventId === events.eventId) { betPos = betItemIndex } 
            return betItem;
        });

        if(betPos === null) {
            newList.push(events)
        } else {
            newList.splice(betPos, 1, events)
        }

        await this.setState({ betList: newList });
        localStorage.setItem('bets', JSON.stringify(newList));
    }

    async removeBetFromList(betItemIndex: number) {
        const newList = this.state.betList.filter((events, betIndex) => betIndex !== betItemIndex);

        await this.setState({ betList: newList });
        localStorage.setItem('bets', JSON.stringify(newList));
    }

    async clear(elem: string, formId: string) {
        localStorage.clear();
        this.setState({betList: []});
        console.log('form', formId);
        document.getElementById(elem).setAttribute('style', 'display: none');
        document.getElementById(formId).reset();
    }

    componentDidMount() {
        this.loadEvents();
    }

    render() {

        const { events } = this.state;

        return(
            <React.Fragment>
                <div className="games__list">
                    <GameList events={events} getBet={bet => this.setBetToList(bet)}/>
                </div>
                <div className="ticket">
                    <Ticket bet={this.state.betList && this.state.betList} removeBet={betIndex => this.removeBetFromList(betIndex)} clear={(elem, formId) => this.clear(elem, formId)}/>
                </div>
            </React.Fragment>
        )
    }
}

export default Dashboard;